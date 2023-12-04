import { StatusPromotion } from './StatusPromotion.model';
import { ProuitStatisticDto } from './ProuitStatisticDto.model';

export interface PromotionStatistique {
    status: StatusPromotion;
    date_applique: Date;
    produits: ProuitStatisticDto[] ;
}

