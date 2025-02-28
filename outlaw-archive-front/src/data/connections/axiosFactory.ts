import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

class AxiosFactory {
  private instance: AxiosInstance;

  constructor(baseURL: string, config?: AxiosRequestConfig) {
    this.instance = axios.create({
      baseURL,
      ...config,
    });

  
  }

  public getInstance(): AxiosInstance {
    return this.instance;
  }
}

export default AxiosFactory;