export default {
    facets: {
        'generic': {
            list: [
                'http://www.w3.org/1999/02/22-rdf-syntax-ns#type'
            ],
            config: {

            }
        },
        'http://risis.eu/genderc/applicants': {
            list: [
                'http://www.w3.org/1999/02/22-rdf-syntax-ns#type',
                'http://xmlns.com/foaf/0.1/gender',
                'http://xmlns.com/foaf/0.1/title',
                'http://risis.eu/genderc/vocab/nationality',
                'http://risis.eu/genderc/vocab/countryOfResidence',
                'http://risis.eu/genderc/vocab/affiliation',
                'http://risis.eu/genderc/vocab/isMedicalDoctor',
                'http://risis.eu/genderc/vocab/relatedTo',
                'http://xmlns.com/foaf/0.1/birthday'
            ],
            config: {
                'http://risis.eu/genderc/vocab/countryOfResidence': {
                    objectIViewer: ['TwoLetterCountryView']
                }
            }
        },
        'http://risis.eu/genderc/grants': {
            list: [
                'http://www.w3.org/1999/02/22-rdf-syntax-ns#type',
                'http://risis.eu/genderc/vocab/panel',
                'http://risis.eu/genderc/vocab/field'
            ],
            config: {
                'http://risis.eu/genderc/vocab/panel': {
                    hasLinkedValue: 1
                }
            }
        },
        'http://risis.eu/genderc/rankings': {
            list: [
                'http://risis.eu/genderc/vocab/ranking'
            ],
            config: {

            }
        },
        'http://risis.eu/genderc/evaluations': {
            list: [
                'http://www.w3.org/1999/02/22-rdf-syntax-ns#type',
                'http://risis.eu/genderc/vocab/granted',
                'http://risis.eu/genderc/vocab/finalScore',
                'http://risis.eu/genderc/vocab/percentageGroup',
                'http://risis.eu/genderc/vocab/numberOfReviewers'

            ],
            config: {

            }
        },
        'http://risis.eu/genderc/applications': {
            list: [
                'http://www.w3.org/1999/02/22-rdf-syntax-ns#type'
            ],
            config: {

            }
        },
        'http://risis.eu/wos': {
            list: [
                'http://www.w3.org/1999/02/22-rdf-syntax-ns#type',
                'http://risis.eu/wos/vocab/PY',
                'http://risis.eu/wos/vocab/WC',
                'http://risis.eu/wos/vocab/SC',
                'http://risis.eu/wos/vocab/LA'
            ],
            config: {
            }
        },
        'http://risis.eu/eter': {
            list: [
                'http://www.w3.org/1999/02/22-rdf-syntax-ns#type',
                'http://risis.eu/eter/vocab/institutionCategoryStandardized',
                'http://risis.eu/eter/vocab/institutionCategory',
                'http://www.geonames.org/ontology#countryCode',
                'http://risis.eu/eter/vocab/fundationYear',
                'http://risis.eu/eter/vocab/hasUniversityHospital',
                'http://risis.eu/eter/vocab/isMultiSite'
        ],
            config: {
                'http://www.geonames.org/ontology#countryCode': {
                    label: ['Country'],
                    objectIViewer: ['TwoLetterCountryView']
                }
            }

        },
        'http://risis.eu/cordisH2020': {
            list: [
                'http://www.w3.org/1999/02/22-rdf-syntax-ns#type',
                'http://risis.eu/cordisH2020/vocab/projectParticipant',
                'http://risis.eu/cordisH2020/vocab/fundingScheme',
                'http://risis.eu/cordisH2020/vocab/topic',
                'http://risis.eu/cordisH2020/vocab/totalCost',
                'http://risis.eu/cordisH2020/vocab/callID',
                'http://rdf-vocabulary.ddialliance.org/discovery#startDate',
                'http://risis.eu/cordisH2020/vocab/durationMonths'
            ],
            config: {
                'http://www.w3.org/1999/02/22-rdf-syntax-ns#type': {
                    label: ['Type'],
                    hint: ['Type of the resource under investigation.']
                },
                'http://risis.eu/cordisH2020/vocab/projectParticipant': {
                    label: ['Participant'],
                    hasLinkedValue: 1
                },
                'http://risis.eu/cordisH2020/vocab/fundingScheme': {
                    label: ['Funding Scheme'],
                    hasLinkedValue: 1
                },
                'http://risis.eu/cordisH2020/vocab/topic': {
                    label: ['Topic'],
                    hasLinkedValue: 1
                }
            }
        }
    }
};
