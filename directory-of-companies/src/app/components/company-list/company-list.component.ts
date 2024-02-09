import { Component, OnInit } from "@angular/core";
import { ICompany } from "../../models/company";
import { CompaniesService } from "../../services/companies.service";
import { DataService } from "../../services/data.service";

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrl: './company-list.component.css'
})
export class CompanyListComponent implements OnInit {
  companies: ICompany[] = [];

  constructor(private companiesService: CompaniesService, private dataService: DataService) {}

  ngOnInit(): void {
    this.companiesService.getAll().subscribe(companies => {
      this.dataService.setCompanies(companies)
      this.companies = this.dataService.getCompanies()
    })
  }
}