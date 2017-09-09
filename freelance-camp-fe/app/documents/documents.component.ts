import { Component } from '@angular/core';
import { Document } from './document';


@Component({
	moduleId: module.id,
	selector: 'documents',
	templateUrl: 'documents.component.html'
})
export class DocumentsComponent {
	documents: Document[] = [
		{
			title: "My First Doc",
			description: "Dummy Doc",
			file_url: "http://www.google.com",
			updated_at: "08/09/2017",
			image_url: "Dummy Image"
		},
				{
			title: "My Second Doc",
			description: "Dummy Doc",
			file_url: "http://www.google.com",
			updated_at: "08/09/2017",
			image_url: "Dummy Image"
		},
				{
			title: "My Third Doc",
			description: "Dummy Doc",
			file_url: "http://www.google.com",
			updated_at: "08/09/2017",
			image_url: "Dummy Image"
		}

	]
}