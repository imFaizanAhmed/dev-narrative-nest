import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateCompanyInput } from './dto/create-company.input';
import { UpdateCompanyInput } from './dto/update-company.input';
import { Company } from 'src/schemas/company.schema';

@Injectable()
export class CompanyService {
  constructor(
    @InjectModel(Company.name) private companyModel: Model<Company>,
  ) {}

  create(createCompanyInput: CreateCompanyInput) {
    const createCompany = new this.companyModel(createCompanyInput);
    return createCompany.save();
  }

  findAll() {
    return `This action returns all company`;
  }

  findOne(id: number) {
    return {
      seller: 'asd',
      ss: 'as',
    };
  }

  update(id: number, updateCompanyInput: UpdateCompanyInput) {
    return `This action updates a #${id} company`;
  }

  remove(id: number) {
    return `This action removes a #${id} company`;
  }
}
