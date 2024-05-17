export default function Home() {
    const forwardCompany = [
        {
            'name': 'Company 1',
            'logo': 'assets/company.png'
        },
        {
            'name': 'Company 2',
            'logo': 'assets/company.png'
        },
        {
            'name': 'Company 3',
            'logo': 'assets/company.png'
        },
        {
            'name': 'Company 4',
            'logo': 'assets/company.png'
        },
        {
            'name': 'Company 5',
            'logo': 'assets/company.png'
        },
        {
            'name': 'Company 6',
            'logo': 'assets/company.png'
        },
        {
            'name': 'Company 7',
            'logo': 'assets/company.png'
        },

        {
            'name': 'Company 8',
            'logo': 'assets/company.png'
        },

        {
            'name': 'Company 9',
            'logo': 'assets/company.png'
        },

        {
            'name': 'Company 10',
            'logo': 'assets/company.png'
        },

        {
            'name': 'Company 11',
            'logo': 'assets/company.png'
        },

        {
            'name': 'Company 12',
            'logo': 'assets/company.png'
        },
    ];

    const marketing = {name: 'Marketing', color: '#d6a196'};
    const design = {name: 'Design', color: '#acd696'};
    const finance = {name: 'Finance', color: '#96d6d6'};
    const it = {name: 'Informatique', color: '#9696d6'};

    const lastOffers = [
        {
            'name': 'Offer 1',
            'type': 'internship',
            'company': {
                'name': 'Company 1',
                'logo': 'assets/company1.png'
            },
            'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec.',
            'tags': [
                marketing,
                design,
            ]
        },
        {
            'name': 'Offer 2',
            'type': 'internship',
            'company': {
                'name': 'Company 2',
                'logo': 'assets/company2.png'
            },
            'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec.',
            'tags': [
                design,
                finance,
            ]
        },
        {
            'name': 'Offer 3',
            'type': 'internship',
            'company': {
                'name': 'Company 3',
                'logo': 'assets/company3.png'
            },
            'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec.',
            'tags': [
                marketing,
                it,
            ],
        },
        {
            'name': 'Offer 4',
            'type': 'internship',
            'company': {
                'name': 'Company 4',
                'logo': 'assets/company4.png'
            },
            'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec.',
            'tags': [
                design,
                finance,
            ],
        },
        {
            'name': 'Offer 5',
            'type': 'internship',
            'company': {
                'name': 'Company 5',
                'logo': 'assets/company5.png'
            },
            'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec.',
            'tags': [
                marketing,
                it,
            ],
        },
        {
            'name': 'Offer 6',
            'type': 'internship',
            'company': {
                'name': 'Company 6',
                'logo': 'assets/company6.png'
            },
            'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec.',
            'tags': [
                design,
                finance,
            ],
        },
        {
            'name': 'Offer 7',
            'type': 'internship',
            'company': {
                'name': 'Company 7',
                'logo': 'assets/company7.png'
            },
            'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec.',
            'tags': [
                marketing,
                it,
            ],
        },
        {
            'name': 'Offer 8',
            'type': 'internship',
            'company': {
                'name': 'Company 8',
                'logo': 'assets/company8.png'
            },
            'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec.',
            'tags': [
                design,
                finance,
            ],
        }
    ];

    const lastApplication = [
        {
            'name': 'Application 1',
            'student': {
                'name': 'Student 1',
                'age': 20,
                'city': 'Paris',
                'country': 'France',
                'picture': 'assets/student1.png'
            },
            type: 'internship',
            tags: [
                'Marketing',
                'Design',
            ]
        },
        {
            'name': 'Application 2',
            'student': {
                'name': 'Student 2',
                'age': 21,
                'city': 'Paris',
                'country': 'France',
                'picture': 'assets/student2.png'
            },
            type: 'internship',
            tags: [
                'Design',
                'Finance',
            ]
        },
        {
            'name': 'Application 3',
            'student': {
                'name': 'Student 3',
                'age': 22,
                'city': 'Paris',
                'country': 'France',
                'picture': 'assets/student3.png'
            },
            type: 'internship',
            tags: [
                'Marketing',
                'Informatique',
            ]
        },
        {
            'name': 'Application 4',
            'student': {
                'name': 'Student 4',
                'age': 23,
                'city': 'Paris',
                'country': 'France',
                'picture': 'assets/student4.png'
            },
            type: 'internship',
            tags: [
                'Design',
                'Finance',
            ]
        },
        {
            'name': 'Application 5',
            'student': {
                'name': 'Student 5',
                'age': 24,
                'city': 'Paris',
                'country': 'France',
                'picture': 'assets/student5.png'
            },
            type: 'internship',
            tags: [
                'Marketing',
                'Informatique',
            ]
        },
        {
            'name': 'Application 6',
            'student': {
                'name': 'Student 6',
                'age': 25,
                'city': 'Paris',
                'country': 'France',
                'picture': 'assets/student6.png'
            },
            type: 'internship',
            tags: [
                'Design',
                'Finance',
            ]
        },
        {
            'name': 'Application 7',
            'student': {
                'name': 'Student 7',
                'age': 26,
                'city': 'Paris',
                'country': 'France',
                'picture': 'assets/student7.png'
            },
            type: 'internship',
            tags: [
                'Marketing',
                'Informatique',
            ]
        },
        {
            'name': 'Application 8',
            'student': {
                'name': 'Student 8',
                'age': 27,
                'city': 'Paris',
                'country': 'France',
                'picture': 'assets/student8.png'
            },
            type: 'internship',
            tags: [
                'Design',
                'Finance',
            ]
        },
        {
            'name': 'Application 9',
            'student': {
                'name': 'Student 9',
                'age': 28,
                'city': 'Paris',
                'country': 'France',
                'picture': 'assets/student9.png'
            },
            type: 'internship',
            tags: [
                'Marketing',
                'Informatique',
            ]
        },
    ];

    return (
        <div>
            <h1>Welcome to the homepage</h1>
            <p>This is the homepage of the app.</p>
        </div>
    );
}
