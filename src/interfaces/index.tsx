export interface IPopupProps {
  open: boolean;
  selectedValue: string;
  onClose: (value: string) => void;
}

export interface ICarouselProps{
  item: { image: string | undefined }
}