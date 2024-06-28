export interface IComment {
  _id?: string;
  user: string;
  number?: string;
  body: string;
  createdAt: number;
  isApproved?: boolean;
}
