export type DogBreeds = {
  [key: string]: string[];
}

export type DogBreedsResponse = {
  message: DogBreeds;
  status: string;
}

export type RandomImageResponse = {
  message: string;
  status: string;
}

export type DogSubBreedsListResponse = {
  message: string[];
  status: string;
}
