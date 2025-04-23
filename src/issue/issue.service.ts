import { Injectable } from '@nestjs/common';
import { CreateIssueDto } from './dto/create-issue.dto';
import { UpdateIssueDto } from './dto/update-issue.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Issue } from './entities/issue.entity';
import { Repository } from 'typeorm';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class IssueService {
  constructor(@InjectRepository(Issue)
              private issueRepository: Repository<Issue>) {}

  create(createIssueDto: CreateIssueDto, user: User) {
    const issue = this.issueRepository.create({ ...createIssueDto, created_by: user.name, updated_by: user.name });
    return this.issueRepository.save(issue);
  }

  findAll() {
    return this.issueRepository.find();
  }

  async update(id: number, updateDto: UpdateIssueDto, user: User) {
    await this.issueRepository.update(id, {...updateDto,  updated_by: user.name });
    return this.issueRepository.findOneBy({ id });
  }
}
