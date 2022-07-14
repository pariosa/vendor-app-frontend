import { Component, VERSION } from '@angular/core';
declare var module: NodeModule;
interface NodeModule
{
id: string;
}

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})

export class AppComponent  {
  name = 'Test';
}
