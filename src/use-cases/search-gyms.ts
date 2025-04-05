import { Gym } from '@prisma/client'
import { GymsRepository } from '../repositories/gyms-repository'

interface SearchGymsUseCaseRequestUseCaseRequest {
  query: string
  page: number
}

interface SearchGymsUseCaseRequestUseCaseResponse {
  gyms: Gym[]
}
export class SearchGymsUseCase {
  constructor(private gymsRepository: GymsRepository) {}

  async execute({
    query,
    page,
  }: SearchGymsUseCaseRequestUseCaseRequest): Promise<SearchGymsUseCaseRequestUseCaseResponse> {
    const gyms = await this.gymsRepository.searchMany(query, page)

    return { gyms }
  }
}
