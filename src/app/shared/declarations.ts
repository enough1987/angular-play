
export interface User {
    fakeToken: string, 
    id: string, 
    login: string, 
    name : {first: string, last: string},
    password: string,
  }

  export interface Course {
    id: number,
    name: string,
    date: string,
    length: number,
    description: string,
    authors: {
        id: number,
        name: string,
    }[],
    isTopRated: boolean,
}
