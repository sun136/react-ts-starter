export type Payload<T = any> = {
  status: number;
  message: string;
  data: T;
};
