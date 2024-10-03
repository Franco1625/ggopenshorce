import { Component, OnInit } from '@angular/core';
import {MentalStateExamsService} from '../../services/mental-state-exams.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-mental-state-exams',
  templateUrl: './mental-state-exams.component.html',
  styleUrls: ['./mental-state-exams.component.css']
})
export class MentalStateExamsComponent implements OnInit {

  exams: any[] = [];

  constructor(private examsService: MentalStateExamsService) { }

  ngOnInit(): void {
    forkJoin({
      exams: this.examsService.getMentalStateExams(),
      patients: this.examsService.getPatients(),
      examiners: this.examsService.getExaminers()
    }).subscribe((result: any) => {
      const { exams, patients, examiners } = result;
      this.exams = exams.map((exam: any) => {

        const patient = patients.find((p: any) => Number(p.id) === exam.patientId);
        const examiner = examiners.find((e: any) => Number(e.id) === exam.examinerId);
        return {
          ...exam,
          patient,
          examiner
        };
      });
    }, error => {
      console.error('Error al obtener los datos:', error);
    });
  }


    // Método para calcular el puntaje total
    calculateTotalScore(exam: any): number {
      return Number(exam.orientationScore) + Number(exam.registrationScore) +
        Number(exam.attentionAndCalculationScore) + Number(exam.recallScore) +
        Number(exam.languageScore);
    }

  // Método para formar el nombre completo de paciente, verificando si el paciente existe
  getPatientFullName(exam: any): string {
    return exam.patient ? `${exam.patient.firstName} ${exam.patient.lastName}` : 'Paciente no encontrado';
  }

  // Método para formar el nombre completo del examinador, verificando si el examinador existe
  getExaminerFullName(exam: any): string {
    return exam.examiner ? `${exam.examiner.firstName} ${exam.examiner.lastName}` : 'Examinador no encontrado';
  }

}
