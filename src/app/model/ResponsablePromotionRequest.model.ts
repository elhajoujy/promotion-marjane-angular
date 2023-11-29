import { ResponsablePromotionDto } from "./ResponsablePromotionDto.model";

export interface ResponsablePromotionRequest {
  responsableId:number;
  promotionList:Array<ResponsablePromotionDto>;
}
