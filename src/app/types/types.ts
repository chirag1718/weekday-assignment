export interface PostsArray {
    companyName: string;
    jdLink: string;
    jdUid: string;
    jobDetailsFromCompany: string;
    jobRole: string;
    location: string;
    logoUrl: string;
    maxExp: number | null;
    minExp: number | null;
    maxJdSalary: number | null;
    minJdSalary: number | null;
    salaryCurrencyCode: string;
}

export interface FilterState {
    role: string;
    location: string;
    minExperience: string;
    companyName: string;
    jobType: string;
    minBasePay: string;
}


export interface JobPostState {
     posts: any[];
     isLoading: boolean;
     hasMorePosts: boolean;
     limit: number;
     offset: number;
 }

 
export interface ModalState {
     isOpen: boolean;
     jobId: string | null;
 }
 