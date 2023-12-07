import { PromotionStatistique } from './PromotionStatistique.model';
import { StatusPromotion } from "./StatusPromotion.model";

export interface PromotionStatistiques {
     size: number;
     status: StatusPromotion;
     promotions: PromotionStatistique[];
}

