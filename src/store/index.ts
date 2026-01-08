import { defineStore } from "pinia";

interface IFilesState {
  rawFiles: File[];
  rejectedFiles: File[];
  processedFiles: File[];
}

export const useFilesStore = defineStore('files', {
	state: (): IFilesState => ({
		rawFiles: [],
		rejectedFiles: [],
		processedFiles: [],
	}),
	actions: {
		setRawFiles (files: File[]): void {
			console.log('On setRawFiles', files);

			this.rawFiles = files;
		},

		eraseRawFiles (): void {
			this.rawFiles = [];
		},

		setRejectedFiles (files: File[]): void {
			this.rejectedFiles = files;
		},

		eraseRejectedFiles (): void {
			this.rejectedFiles = [];
		},

		setProcessedFiles (files: File[]): void {
			this.processedFiles = files;
		},

		eraseProcessedFiles (): void {
			this.processedFiles = [];
		},
	}
});
