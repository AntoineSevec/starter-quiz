import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Quiz } from '../../../models/quiz.model';

@Component({
  selector: 'app-edit-quiz',
  templateUrl: './editquizcomponent.component.html',
  styleUrls: ['./editquizcomponent.component.scss']
})
export class EditQuizComponent implements OnInit {
  @Input()
  quiz: Quiz;

  @Output()
  quizSelected: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output()
  quizDeleted: EventEmitter<Quiz> = new EventEmitter<Quiz>();

  constructor() {
  }

  ngOnInit() {
  }
}
