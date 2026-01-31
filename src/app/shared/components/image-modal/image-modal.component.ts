import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-image-modal',
  templateUrl: './image-modal.component.html',
  styleUrls: ['./image-modal.component.scss'],
})
export class ImageModalComponent {
  @Input() imageSrc!: string;
  @Input() imageAlt!: string;

  @Output() closeModal = new EventEmitter<void>();

  zoomLevel = 1;

  close() {
    this.closeModal.emit();
  }

  zoomIn() {
    this.zoomLevel = Math.min(this.zoomLevel + 0.2, 2);
  }

  zoomOut() {
    this.zoomLevel = Math.max(this.zoomLevel - 0.2, 0.5);
  }

  // Reset zoom on close
  ngOnDestroy() {
    this.zoomLevel = 1;
  }
}
