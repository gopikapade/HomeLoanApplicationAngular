export class Enquiry {

    enquryId: number
    firstName: string
    lastName: string
    email: string
    marrtialStatus: string
    pancardNo: string
    age: number
    mobileNo: number
    income: number
    loanAmmount: number
    oeResponce: boolean
    userResponce: boolean
    cmResponce: boolean
    forwardToOe: boolean;
    education: EducationlInfo;
    cibilEnquiry: Cibil;

}
export class EducationlInfo {
    higherEducation: string
}

export class Cibil {

    cbillScore: number
    data: string
    status: boolean
    remark: String


}

export class EMI {
    id: number;
    loanAmmount: number;
    tenure: number;
    intrestrate: number;
    monthlyEmi: number;
}