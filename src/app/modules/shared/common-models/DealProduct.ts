import { Currency } from './Currency';

export interface DealProduct {
  id: number;
  isNew?: boolean;
  name: string;
  expiryDate: Date;
  rating?: number;
  maxRating?: number;
  actualPrice: number;
  dealPrice: number;
}