export interface IService {
  init(): Promise<boolean> | Promise<void>;
}
