import { useContext, useState } from 'react';
import { FooterContainer, FormContainer } from './styles'
import { FormProvider, useForm } from 'react-hook-form';
import ReactVirtualizedTable from '../VirtualizedTable';
import { Summary } from '../Summary';
import { Button } from '@mui/material';
import * as z from "zod"
import { zodResolver } from '@hookform/resolvers/zod';
import apiService from '../../../data/connections/apiService';
import { OutlawArchiveContext } from '../../../data/contexts/OutlawArchive/OutlawArchiveContext';
import PreviewModal from './components/MassEditModal';

const UpdateFormScheme = z.object({
    wanted_name: z.string({
        required_error: "Nome do procurado é obrigatório",
        invalid_type_error: "Tipo inválido",
    }).min(1, { message: "Nome do procurado é obrigatório" }),
    wanted_status: z.enum(["Procurado", "Capturado"], {
        required_error: "Status é obrigatório"
    }),
    bounty_value: z.number(),
    dead_or_alive: z.boolean(),
    location: z.string(),
    notes: z.string(),
});

type UpdateFormType = z.infer<typeof UpdateFormScheme>;

export function DefaultLayout() {
    const { editStates, changeEditState, fetchAllWantedOutlaw, selectedValues } = useContext(OutlawArchiveContext);
    const formOutlawWanted = useForm<UpdateFormType>({
        resolver: zodResolver(UpdateFormScheme),

    });
    const [modalOpen, setModalOpen] = useState(false);
    const handleOpenModal = () => setModalOpen(true);
    const handleCloseModal = (changed: boolean) => {
        if (changed)
            fetchAllWantedOutlaw()

        setModalOpen(false);
    };

    const { handleSubmit, clearErrors } = formOutlawWanted;
    const handleSubmitSingleValues = async (value: UpdateFormType) => {

        const id = Object.keys(editStates)[0]
        if (id)
            await apiService.patch(`/wanted/${id}`, value)

        await fetchAllWantedOutlaw();
        changeEditState()
        clearErrors();
    };
    return (
        <>
            <FormContainer onSubmit={handleSubmit(handleSubmitSingleValues)}>
                <FormProvider {...formOutlawWanted}>
                    <ReactVirtualizedTable />
                </FormProvider>
                <FooterContainer>
                    {/* Contadores */}
                    <Summary />

                    {/* Botões */}
                    <div className="buttons-container">
                        <Button
                            variant="contained"
                            type="button"
                            disabled={selectedValues.size === 0}
                            onClick={() => handleOpenModal()}
                        >
                            Alterar Selecionados
                        </Button>
                        <Button disabled={!Object.keys(editStates)[0]} variant="contained" type="submit">
                            Alterar
                        </Button>
                    </div>



                </FooterContainer>

                <PreviewModal
                    open={modalOpen}
                    onClose={handleCloseModal}
                />
            </FormContainer>

        </>
    )
}