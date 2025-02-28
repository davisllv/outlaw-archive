/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react';
import {
    Modal,
    Box,
    Typography,
    Paper,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    FormLabel,
    FormControlLabel,
    SelectChangeEvent,
    useTheme,
    Button,
} from '@mui/material';
import { IColumnData, IOutlawInformations } from '../../../../../data/types/interfaces/GeneralInterfaces';
import { TableVirtuoso } from 'react-virtuoso';
import { VirtuosoTableComponents } from '../../../TableComponents';
import { HeaderContent } from '../../../VirtualizedTable/components/HeaderContent';
import { OutlawArchiveContext } from '../../../../../data/contexts/OutlawArchive/OutlawArchiveContext';
import { RowContentModal } from '../RowContentModal';
import { CustomSwitch } from '../../styles';
import { CheckCircle, NotInterested } from '@mui/icons-material';
import apiService from '../../../../../data/connections/apiService';

interface PreviewModalProps {
    open: boolean;
    onClose: (changed: boolean) => void;
}

const columns: IColumnData[] = [
    {
        width: 100,
        label: "Nome Procurado",
        dataKey: "wanted_name",
    },
    {
        width: 60,
        label: "Status",
        dataKey: "wanted_status",
    },
    {
        width: 100,
        label: "Vivo ou Morto",
        dataKey: "dead_or_alive",
    },

];

const PreviewModal: React.FC<PreviewModalProps> = ({ open, onClose }) => {
    const [values, setValues] = useState<IOutlawInformations[]>([] as IOutlawInformations[])
    const [loading, setLoading] = useState(false);
    const [wantedStatus, setWantedStatus] = useState<"Procurado" | "Capturado">("Procurado");
    const [deadOrAlive, setDeadOrAlive] = useState<boolean>(true);
    const theme = useTheme();
    const { selectedValues, data, toggleSelectAll } = useContext(OutlawArchiveContext);

    function fetchAllValuesInsideList() {
        const result = data.filter((item) => selectedValues.has(item.id))
        setValues(result)
    }

    const handleChangeDeadOrAlive = (event: React.ChangeEvent<HTMLInputElement>) => {
        const checked = event.target.checked
        setDeadOrAlive(checked);

        setValues((prevState) => {
            return (
                prevState.map((item) => {
                    return { ...item, dead_or_alive: checked }
                })
            )
        })
    };

    const handleChangeWantedStatus = (event: SelectChangeEvent<"Procurado" | "Capturado">) => {
        const status = event.target.value as "Procurado" | "Capturado"
        setWantedStatus(status);

        setValues((prevState) => {
            return (
                prevState.map((item) => {
                    return { ...item, wanted_status: status }
                })
            )
        })
    };

    const handleSubmitAllValues = async () => {
        setLoading(true); // Inicia o carregamento
        try {
            await apiService.put("/wanted", {
                ids: [...selectedValues],
                bulk_values: {
                    deadOrAlive,
                    wantedStatus,
                },
            });

            toggleSelectAll()
            onClose(true);
        } catch (error) {
            console.error("Erro ao atualizar os valores:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchAllValuesInsideList()
    }, [open])

    return (
        <Modal open={open} onClose={() => onClose(false)}>
            <Box
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 1200,
                    bgcolor: 'background.paper',
                    boxShadow: 24,
                    borderRadius: "12px",
                    p: 4,
                }}
            >
                <Typography variant="h6" component="h2">
                    Pré-visualização de Alterações em Massa
                </Typography>
                <Paper
                    style={{
                        height: "60vh",
                        width: "100%",
                    }}
                >
                    <TableVirtuoso
                        data={values}
                        components={VirtuosoTableComponents}
                        fixedHeaderContent={() => HeaderContent({ columns })}
                        itemContent={(_, row) => (
                            <RowContentModal
                                row={row}
                            // isEditing={editStates[row.id] ?? false}
                            // onEditClick={handleEditClick}
                            />
                        )}
                    />
                </Paper>
                <div style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center"
                }}>
                    <FormControl sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        gap: "1rem",
                        marginTop: "1rem"
                    }}>
                        <InputLabel id="demo-simple-select-label">Status</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={wantedStatus}
                            label="Status"
                            onChange={handleChangeWantedStatus}
                            sx={{
                                backgroundColor: theme.palette.grey[700], // Marrom bem escuro
                                color: theme.palette.text.primary, // Cor do texto primário
                                border: `1px solid ${theme.palette.grey[600]}`, // Cinza amadeirado
                                '& .MuiSvgIcon-root': {
                                    color: theme.palette.text.primary,
                                },
                                '& .MuiOutlinedInput-notchedOutline': {
                                    borderColor: theme.palette.grey[600],
                                },
                                '&:hover .MuiOutlinedInput-notchedOutline': {
                                    borderColor: theme.palette.grey[500],
                                },
                                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                    borderColor: theme.palette.primary.main, // Marrom clássico
                                },
                                '& .MuiSelect-select': {
                                    padding: '10px',
                                },
                            }}
                            MenuProps={{
                                PaperProps: {
                                    sx: {
                                        backgroundColor: theme.palette.grey[500],
                                        color: theme.palette.text.primary,
                                    },
                                },
                            }}
                        >
                            <MenuItem value={"Procurado"}>Procurado</MenuItem>
                            <MenuItem value={"Capturado"}>Capturado</MenuItem>
                        </Select>

                        <div className="radio-group" style={{
                            display: "flex",
                            flexDirection: "column",
                            width: "100%"
                        }}>
                            <FormLabel id="demo-row-radio-buttons-group-label">Vivo ou Morto</FormLabel>
                            <FormControlLabel
                                control={
                                    <CustomSwitch
                                        checked={deadOrAlive}
                                        onChange={handleChangeDeadOrAlive}
                                        name="deadOrAlive"
                                        icon={<NotInterested />} // Ícone para "Morto"
                                        checkedIcon={<CheckCircle />} // Ícone para "Vivo"
                                    />
                                }
                                label={deadOrAlive ? 'Vivo' : 'Morto'}
                            />
                        </div>

                    </FormControl>

                    <Button variant="contained" loading={loading} onClick={() => handleSubmitAllValues()}>Aplicar Alterações</Button>
                </div>



            </Box>
        </Modal>
    );
};

export default PreviewModal;