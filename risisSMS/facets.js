export default {
    facets: {
        'generic': {
            list: [
                'http://www.w3.org/1999/02/22-rdf-syntax-ns#type'
            ],
            config: {

            }
        },
        'http://more2Orgs.risis.eu': {
            list: [
                'http://www.w3.org/1999/02/22-rdf-syntax-ns#type', 'http://risis.eu/More2/ontology/predicate/Noofrecordedshareholders', 'http://risis.eu/More2/ontology/predicate/Country', 'http://risis.eu/More2/ontology/predicate/City'
            ],
            config: {
                'http://risis.eu/More2/ontology/predicate/Noofrecordedshareholders': {
                    label: ['No. of Recorded Shareholders']
                }
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
                    objectIViewer: ['TwoLetterCountryView'],
                    label: ['Country of Residence']
                },
                'http://risis.eu/genderc/vocab/isMedicalDoctor': {
                    label: ['Is Medical Dr?']
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
                'http://risis.eu/genderc/vocab/percentageGroup': {
                    label: ['Percentage Group']
                },
                'http://risis.eu/genderc/vocab/numberOfReviewers': {
                    label: ['No. of Reviewers']
                }
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
                'http://risis.eu/wos/vocab/PY': { label: 'Publication year' },
                'http://risis.eu/wos/vocab/WC': { label: 'WoS Category' },
                'http://risis.eu/wos/vocab/SC': { label: 'Subject Category' },
                'http://risis.eu/wos/vocab/LA': { label: 'Language' }
            }
        },
        'http://risis.eu/eter': {
            list: [
                'http://www.w3.org/1999/02/22-rdf-syntax-ns#type',
                'http://risis.eu/eter/vocab/institutionCategory',
                'http://risis.eu/eter/vocab/institutionCategoryStandardized',
                'http://www.geonames.org/ontology#countryCode',
                'http://risis.eu/eter/vocab/fundationYear',
                'http://risis.eu/eter/vocab/hasUniversityHospital',
                'http://risis.eu/eter/vocab/isMultiSite'
        ],
            config: {
                'http://www.geonames.org/ontology#countryCode': {
                    label: ['Country'],
                    objectIViewer: ['TwoLetterCountryView']
                },
                'http://risis.eu/eter/vocab/institutionCategoryStandardized': {
                    label: ['Inst. Category Standardized']
                },
                'http://risis.eu/eter/vocab/institutionCategoryStandardized': {
                    label: ['Inst. Category']
                },
                'http://risis.eu/eter/vocab/fundationYear': {
                    label: ['Fundation Year']
                },
                'http://risis.eu/eter/vocab/hasUniversityHospital': {
                    label: ['Has Univ. Hospital?']
                },
                'http://risis.eu/eter/vocab/isMultiSite': {
                    label: ['Is Multi Site?']
                }
            }

        },
        'http://live.dbpedia.org': {
            list: ['http://www.w3.org/1999/02/22-rdf-syntax-ns#type','http://dbpedia.org/property/country', 'http://dbpedia.org/property/established', 'http://dbpedia.org/property/city'],
            config: {

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
        },
        'http://www.freme-project.eu/datasets/cordis': {
            list: [
                'http://www.w3.org/1999/02/22-rdf-syntax-ns#type',
                'http://www.freme-project.eu/datasets/cordis/programme',
                'http://www.freme-project.eu/datasets/cordis/projectFundingScheme',
                'http://www.freme-project.eu/datasets/cordis/projectTopics',
                'http://www.freme-project.eu/datasets/cordis/status',
                'http://www.freme-project.eu/datasets/cordis/activityType'
            ],
            config: {
                'http://www.freme-project.eu/datasets/cordis/projectFundingScheme': {
                    label: ['Funding Scheme']
                },
                'http://www.freme-project.eu/datasets/cordis/projectTopics': {
                    label: ['Topics']
                },
                'http://www.freme-project.eu/datasets/cordis/activityType': {
                    label: ['Activity Type']
                }
            }
        },
        'http://grid.ac': {
            list: [
                'http://www.w3.org/1999/02/22-rdf-syntax-ns#type', 'http://www.grid.ac/ontology/establishedYear'
            ],
            config: {

            }
        },
        'https://ec.europa.eu/jrc/en/language-technologies/jrc-names': {
            list: [
                'http://www.w3.org/1999/02/22-rdf-syntax-ns#type'
            ],
            config: {

            }
        },
        'http://geo.risis.eu/rvo-nl': {
            list: [
                'http://www.w3.org/1999/02/22-rdf-syntax-ns#type', 'http://www.europeana.eu/schemas/edm/year', 'http://purl.org/dc/terms/subject', 'http://geo.risis.eu/vocabulary/rvo-nl/status'
            ],
            config: {

            }
        },
        'http://geo.risis.eu/oecd': {
            list: [
                'http://www.w3.org/1999/02/22-rdf-syntax-ns#type', 'http://geo.risis.eu/vocabulary/oecd/isCore', 'http://geo.risis.eu/vocabulary/oecd/ISO'
            ],
            config: {
                'http://geo.risis.eu/vocabulary/oecd/ISO': {
                    label: ['Country']
                },
            }
        },
        'http://orgref.org': {
            list: [
            'http://www.w3.org/1999/02/22-rdf-syntax-ns#type', 'http://dbpedia.org/ontology/iso6392Code'
            ],
            config: {
            }
        },
    }
};
