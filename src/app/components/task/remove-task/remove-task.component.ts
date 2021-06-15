import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-remove-task',
  templateUrl: './remove-task.component.html',
  styleUrls: ['./remove-task.component.css']
})
export class RemoveTaskComponent implements OnInit {

  constructor(private task:TaskService,
    private router:Router,
    private routRequestParam: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.routRequestParam.snapshot.paramMap.get('id')
    var resposta = confirm('Deseja deletar a tarefa de #ID?'+id)
    if (resposta == true){
      this.task.removeTask(id).subscribe(()=>{
        this.router.navigate(['task/'])
      })
    }else{
      this.router.navigate(['task/'])
    }
  }

}
