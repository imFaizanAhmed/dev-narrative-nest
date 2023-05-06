import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CompanyService } from './company.service';
import { CreateCompanyInput } from './dto/create-company.input';
import { UpdateCompanyInput } from './dto/update-company.input';

@Resolver('Company')
export class CompanyResolver {
  constructor(private readonly companyService: CompanyService) {}

  @Mutation('createCompany')
  create(@Args('createCompanyInput') createCompanyInput: CreateCompanyInput) {
    console.log("it's found", createCompanyInput);
    return this.companyService.create(createCompanyInput);
  }

  @Query('company')
  find(@Args('id', { nullable: true }) id?: number) {
    console.log('first');
    if (id) {
      return this.companyService.findOne(id);
    } else {
      return this.companyService.findAll();
    }
  }
  @Mutation('updateCompany')
  update(@Args('updateCompanyInput') updateCompanyInput: UpdateCompanyInput) {
    return this.companyService.update(
      updateCompanyInput.id,
      updateCompanyInput,
    );
  }

  @Mutation('removeCompany')
  remove(@Args('id') id: number) {
    return this.companyService.remove(id);
  }

  @Query('testing')
  testing() {
    return 'Hello';
  }
}
