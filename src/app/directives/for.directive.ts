import { Directive, OnInit, Input, ViewContainerRef, TemplateRef } from '@angular/core';

@Directive({
  selector: '[myFor]',
})
export class ForDirective implements OnInit {  //Implemenando ciclo de vida de incialização, ou seja ele só vai executar esse diretiva quando for feita a inicialização dela
  @Input('myForEm')
  numbers: number[] = []; //Deve ser feita a definição da propriedade

  @Input('myForChar')
  texto: string = '';

  constructor(private container:ViewContainerRef, private template:TemplateRef<any>) {

  }
  ngOnInit(): void {

    for(let number of this.numbers){
      this.container.createEmbeddedView(
        this.template,
        {$implicit : number});
    }
  }

}
