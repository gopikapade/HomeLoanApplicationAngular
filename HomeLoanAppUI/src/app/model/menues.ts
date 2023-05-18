export class Menues {

    public static RoleMenus: Array<any> = [

        {
            're': [
                { label: 'Enquiry', path: 'enquiry' },
                { label: 'RejectEnquiry', path: 'rejectenq' },
                { label: 'Loan Application', path: 'loan' },
                { label: 'Mail Sanction', path: 'mailsanction' }
            ],
            'oe': [
                { label: 'Check Cibil', path: 'cibil' },
                { label: 'Verify Document', path: 'verifydoc' },
            ],
            'cm':[
                {label:'verify Documnet', path:'verifydoc'},
                {label:'Genrate Sanction Letter', path:'sanction'}
            ],
            'ah':[
                {label:'Loan Disbusment', path:'disbusment'},
                {label:'Leadger Manegment', path:'ledger'},
                {label:'Defaulter', path:'defaulter'},
                {label:'Loan closer', path:'closer'}
            ]
        }
    ]

}
