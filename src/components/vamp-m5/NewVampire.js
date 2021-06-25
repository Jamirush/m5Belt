import React, { Component } from 'react'
import Characteristic from './add-vamp-m5/Characteristic'
import Ability from './add-vamp-m5/Ability'
import Skill from './add-vamp-m5/Skill'
import Square from './add-vamp-m5/Square'
import RuleDot from './add-vamp-m5/RuleDot'
import Clans from './add-vamp-m5/Clans'
import Discipline from './add-vamp-m5/Discipline'
import SkillsCharacterType from './add-vamp-m5/SkillsCharacterType'
import SpecialisationRules from './add-vamp-m5/SpecialisationRules'

import  {Container, Form, Row, Col, Button} from 'react-bootstrap';

//FontAwesome
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class NewVampire extends Component {
    state = {
        rules : {
            minValue: 0,
            maxValue: 5,
            attributes: [
                {use: false, value:4},
                {use: false, value:3},
                {use: false, value:3},
                {use: false, value:3},
                {use: false, value:2},
                {use: false, value:2},
                {use: false, value:2},
                {use: false, value:2},
                {use: false, value:1},
            ],
            toucheATout: [
                {use: false, value:3},
                {use: false, value:3},
                {use: false, value:3},
                {use: false, value:2},
                {use: false, value:2},
                {use: false, value:2},
                {use: false, value:2},
                {use: false, value:2},
                {use: false, value:2},
                {use: false, value:2},
                {use: false, value:2},
                {use: false, value:1},
                {use: false, value:1},
                {use: false, value:1},
                {use: false, value:1},
                {use: false, value:1},
                {use: false, value:1},
                {use: false, value:1},
                {use: false, value:1},
                {use: false, value:1},
                {use: false, value:1},
                {use: false, value:0},
                {use: false, value:0},
                {use: false, value:0},
                {use: false, value:0},
                {use: false, value:0},
                {use: false, value:0},
            ],
            equilibre: [
                {use: false, value:3},
                {use: false, value:3},
                {use: false, value:3},
                {use: false, value:2},
                {use: false, value:2},
                {use: false, value:2},
                {use: false, value:2},
                {use: false, value:2},
                {use: false, value:1},
                {use: false, value:1},
                {use: false, value:1},
                {use: false, value:1},
                {use: false, value:1},
                {use: false, value:1},
                {use: false, value:1},
                {use: false, value:0},
                {use: false, value:0},
                {use: false, value:0},
                {use: false, value:0},
                {use: false, value:0},
                {use: false, value:0},
                {use: false, value:0},
                {use: false, value:0},
                {use: false, value:0},
                {use: false, value:0},
                {use: false, value:0},
                {use: false, value:0},

            ],
            specialiste: [
                {use: false, value:4},
                {use: false, value:3},
                {use: false, value:3},
                {use: false, value:3},
                {use: false, value:2},
                {use: false, value:2},
                {use: false, value:2},
                {use: false, value:1},
                {use: false, value:1},
                {use: false, value:1},
                {use: false, value:0},
                {use: false, value:0},
                {use: false, value:0},
                {use: false, value:0},
                {use: false, value:0},
                {use: false, value:0},
                {use: false, value:0},
                {use: false, value:0},
                {use: false, value:0},
                {use: false, value:0},
                {use: false, value:0},
                {use: false, value:0},
                {use: false, value:0},
                {use: false, value:0},
                {use: false, value:0},
                {use: false, value:0},
                {use: false, value:0},

            ],
            disciplines:[
                {use: false, value:2},
                {use: false, value:1},
                {use: false, value:0}
            ],
            disciplinesCaitif:[
                {use: false, value:2},
                {use: false, value:1},
                {use: false, value:0},
                {use: false, value:0},
                {use: false, value:0},
                {use: false, value:0},
                {use: false, value:0},
                {use: false, value:0},
                {use: false, value:0},
                {use: false, value:0}
            ]
        },
        clans:{
            brujah:{id:'brujah', name:'Brujah', disciplines:'celerite-presence-puissance', fleau:''},
            gangrel:{id:'gangrel', name:'Gangrel', disciplines:'animalisme-forceame-proteisme', fleau:''},
            malkavien:{id:'malkavien', name:'Malkavien', disciplines:'auspex-domination-occultation', fleau:''},
            nosferatu:{id:'nosferatu', name:'Nosferatu', disciplines:'animalisme-occultation-puissance', fleau:''},
            toteador:{id:'toteador', name:'Totéador', disciplines:'auspex-celerite-presence', fleau:''},
            tremere:{id:'tremere', name:'Tremere', disciplines:'auspex-domination-sorcelleriesang', fleau:''},
            ventru:{id:'ventru', name:'Ventru', disciplines:'domination-forceame-presence', fleau:''},
            caitiff:{id:'caitiff', name:'Les caïtiffs', disciplines:'animalisme-auspex-celerite-domination-forceame-occultation-presence-proteisme-puissance-sorcelleriesang', fleau:''},
            sangclair:{id:'sangclair', name:'Les sangs clairs', disciplines:'alchimiesangclair', fleau:''}
        },
        disciplines:{
            animalisme: {id:'animalisme', name:'Animalisme', isClan: false, value: 0},
            auspex: {id:'auspex',name:'Auspex', isClan: false, value: 0},
            celerite: {id:'celerite',name:'Célérité', isClan: false, value: 0},
            domination:{id:'domination',name:'Domination', isClan: false, value: 0},
            forceame: {id:'forceame',name:"Force d'âme", isClan: false, value: 0},
            occultation: {id:'occultation',name:'Occultation', isClan: false, value: 0},
            presence: {id:'presence',name:'Présence', isClan: false, value: 0},
            proteisme: {id:'proteisme',name:'Protéisme', isClan: false, value: 0},
            puissance: {id:'puissance',name:'Puissance', isClan: false, value: 0},
            sorcelleriesang: {id:'sorcelleriesang',name:'Sorcellerie du sang', isClan: false, value: 0},
            alchimiesangclair: {id:'alchimiesangclair',name:'Alchimie du sang clair', isClan: false, value: 0}  
        },

        isUgly: false,
        attributesRulesRespected: false,
        skillCharacterType: '',
        skillsRulesRespected: false,
        specialisationRulesRespected: false,
        disciplineRulesRespected: false,
        characteristics: {
            name: {id: 'name', name:'Nom', value:''},
            concept: {id: 'concept', name:'Concept', value:''},
            chronique: {id: 'chronique', name:'Chronique', value:''},
            ambition: {id: 'ambition', name:'Ambition', value:''},
            sir: {id: 'sir', name:'Sire', value:''},
            desire: {id: 'desire', name:'Désir', value:''},
            predator: {id: 'predator', name:'Prédateur', value:''}
        },

        attributesPhysique: {
            force: {id: 'force', name:'Force', value: 1},
            dexterite: {id: 'dexterite', name:'Dextérité', value: 1},
            vigueur: {id: 'vigueur', name:'Vigueur', value: 1},
        },
        attributesSocial: {
            charisme: {id: 'charisme', name:'Charisme', value: 1},
            manipulation: {id: 'manipulation', name:'Manipulation', value: 1},
            sansFroid: {id: 'sansFroid', name:'Sang-froid', value: 1},
        },
        attributesMental: {
            intelligence: {id: 'intelligence', name:'Intelligence', value: 1},
            astuce: {id: 'astuce', name:'Astuce', value: 1},
            resolution: {id: 'resolution', name:'Résolution', value: 1},
        },

        skillsPhysique: {
            armesFeu: {id: 'armesFeu', name:'Armes à feu', value: 0, specialisation:'' },
            artisanat: {id: 'artisanat', name:'Artisanat', value: 0, specialisation:'' },
            athletisme: {id: 'athletisme', name:'Athlétisme', value: 0, specialisation:'' },
            bagarre: {id: 'bagarre', name:'Bagarre', value: 0, specialisation:'' },
            conduite: {id: 'conduite', name:'Conduite', value: 0, specialisation:'' },
            furtivite: {id: 'furtivite', name:'Furtivité', value: 0, specialisation:'' },
            larcin: {id: 'larcin', name:'Larcin', value: 0, specialisation:'' },
            melee: {id: 'melee', name:'Mêlée', value: 0, specialisation:'' },
            survie: {id: 'survie', name:'Survie', value: 0, specialisation:'' }
        },
        skillsSocial: {
            animaux: {id: 'animaux', name:'Animaux', value: 0, specialisation:'' },
            commandement: {id: 'commandement', name:'Commandement', value: 0, specialisation:'' },
            empathie: {id: 'empathie', name:'Empathie', value: 0, specialisation:'' },
            etiquette: {id: 'etiquette', name:'Étiquette', value: 0, specialisation:'' },
            experienceRue: {id: 'experienceRue', name:'Expérience de la rue', value: 0, specialisation:'' },
            intimidation: {id: 'intimidation', name:'Intimidation', value: 0, specialisation:'' },
            performance: {id: 'performance', name:'Performance', value: 0, specialisation:'' },
            persuasion: {id: 'persuasion', name:'Persuasion', value: 0, specialisation:'' },
            subterfuge: {id: 'subterfuge', name:'Subterfuge', value: 0, specialisation:'' }
        },
        skillsMental: {
            erudition: {id: 'erudition', name:'Érudition', value: 0, specialisation:'' },
            finances: {id: 'finances', name:'Finances', value: 0, specialisation:'' },
            invertigation: {id: 'invertigation', name:'Investigation', value: 0, specialisation:'' },
            medecine: {id: 'medecine', name:'Médecine', value: 0, specialisation:'' },
            occultisme: {id: 'occultisme', name:'Occultisme', value: 0, specialisation:'' },
            politique: {id: 'politique', name:'Politique', value: 0, specialisation:'' },
            sciences: {id: 'sciences', name:'Sciences', value: 0, specialisation:'' },
            technologie: {id: 'technologie', name:'Technologie', value: 0, specialisation:'' },
            vigilance: {id: 'vigilance', name:'Vigilance', value: 0, specialisation:'' }
        },
        spe:{
            need: true,
            obtain: false
        },
        artisanatSpe: {
            need: false,
        },
        performanceSpe: {
            need: false,
        },
        eruditionSpe: {
            need: false,
        },
        sciencesSpe: {
            need: false,
        },
        calculateData: {
            volonte: {id: 'volonte', name:'Volonté', value: 2},
            sante: {id: 'sante', name:'Santé', value: 5},
        },
        vampire:{
            clan:'brujah',
            ambition: '',
            chronique: '',
            concept: '',
            desire: '',
            name: '',
            predator: '', 
            sir: '',
            force: 1,
            dexterite: 1,
            vigueur: 1,
            charisme: 1,
            manipulation: 1,
            sansFroid: 1,
            intelligence: 1,
            astuce: 1,
            resolution: 1,
            armesFeu: 0,
            artisanat: 0,
            athletisme: 0,
            bagarre: 0,
            conduite: 0,
            furtivite: 0,
            larcin: 0,
            melee: 0,
            survie: 0,
            animaux: 0,
            commandement: 0,
            empathie: 0,
            etiquette: 0,
            experienceRue: 0,
            intimidation: 0,
            performance: 0,
            persuasion: 0,
            subterfuge: 0,
            erudition: 0,
            finances: 0,
            invertigation: 0,
            medecine: 0,
            occultisme: 0,
            politique: 0,
            sciences: 0,
            technologie: 0,
            vigilance: 0,

            armesFeuSpe:'',
            artisanatSpe: '',
            athletismeSpe: '',
            bagarreSpe: '',
            conduiteSpe: '',
            furtiviteSpe: '',
            larcinSpe: '',
            meleeSpe: '',
            survieSpe: '',
            animauxSpe: '',
            commandementSpe: '',
            empathieSpe: '',
            etiquetteSpe: '',
            experienceRueSpe: '',
            intimidationSpe: '',
            performanceSpe: '',
            persuasionSpe: '',
            subterfugeSpe: '',
            eruditionSpe: '',
            financesSpe: '',
            invertigationSpe: '',
            medecineSpe: '',
            occultismeSpe: '',
            politiqueSpe: '',
            sciencesSpe: '',
            technologieSpe: '',
            vigilanceSpe: '',

            vonlonte: 2,
            sante: 5,

            animalisme: 0,
            auspex: 0,
            celerite: 0,
            domination: 0,
            forceame: 0,
            occultation: 0,
            presence: 0,
            proteisme: 0,
            puissance: 0,
            sorcelleriesang: 0,
            alchimiesangclair: 0,  
     
        }
    }
    handleClanChange = event => {

        const disciplines = {...this.state.disciplines}
        
        Object.keys(disciplines).map(key => 
            disciplines[key].value = 0
        )

        this.setState({disciplines})
        
        const { id } = event.target  
        const vampire = {...this.state.vampire}
        vampire['clan'] = id

        let isUgly = this.state.isUgly
        isUgly = id === 'nosferatu'
        this.setState({isUgly})

        const attributesSocial = { ...this.state.attributesSocial }
        attributesSocial['charisme'].value = id === 'nosferatu' ? 1 : attributesSocial['charisme'].value
        this.setState({attributesSocial})

        vampire.Charisme = id === 'nosferatu' ? 0 : vampire.Charisme = 0 ? 1 : vampire.Charisme
        this.setState({vampire})
        setTimeout(() => {
            this.checkDisciplinesRules() 
        }, 20);
    }

    handleCharacteristicChange = event => {
        const { id, value } = event.target  
        const characteristics = { ...this.state.characteristics }
        characteristics[id].value = value
        this.setState({characteristics})
        this.updateStade(id, value)
    }

    handleAttributesPhysiqueChange = event => {
        const { id } = event.target  
        const atributeMinValue = 1
        const infoArray = this.extractId(id)
        const name = infoArray[1]
        const value = infoArray[2] 
        const attributesPhysique = { ...this.state.attributesPhysique }
        const newValue = this.newDotValue(attributesPhysique[name], value, atributeMinValue)
        attributesPhysique[name].value = newValue
        this.setState({attributesPhysique})
        if(name === 'vigueur') {
            const calculateData = { ...this.state.calculateData }
            calculateData['sante'].value = newValue + 4
            const vampire = { ...this.state.vampire }
            vampire[name] = newValue
            vampire['sante'] = calculateData['sante'].value
            this.setState({calculateData})
            this.setState({vampire})
            this.checkAttributesRules()
        } else {
            this.updateStade(name, newValue)
            this.checkAttributesRules()
        }
    }

    handleAttributesSocialChange = event => {
        const { id } = event.target  
        const atributeMinValue = 1
        const infoArray = this.extractId(id)
        const name = infoArray[1]
        const value = infoArray[2] 
        const attributesSocial = { ...this.state.attributesSocial }
        const newValue = this.newDotValue(attributesSocial[name], value, atributeMinValue)
        attributesSocial[name].value = newValue
        this.setState({attributesSocial})
        if(name === 'sansFroid' ) {
            this.renderWillpowerDot(newValue, name)
            this.checkAttributesRules()
        } else {
            this.updateStade(name, attributesSocial[name].value)
            this.checkAttributesRules()
        }
    }

    handleAttributesMentalChange = event => {
        const { id } = event.target  
        const atributeMinValue = 1
        const infoArray = this.extractId(id)
        const name = infoArray[1]
        const value = infoArray[2] 
        const attributesMental = { ...this.state.attributesMental }
        const newValue = this.newDotValue(attributesMental[name], value, atributeMinValue)
        attributesMental[name].value = newValue
        this.setState({attributesMental})
        if(name === 'resolution') {
            this.renderWillpowerDot(newValue, name)
            this.checkAttributesRules()
        } else {
            this.updateStade(name, attributesMental[name].value)
            this.checkAttributesRules()
        }
    }

    handleSkillsPhysiqueChange = event => {
        const { id } = event.target  
        console.log(id)
        const infoArray = this.extractId(id)
        const name = infoArray[1]
        const value = infoArray[2] 
        
        const skillsPhysique = { ...this.state.skillsPhysique }
        const newValue = this.newDotValue(skillsPhysique[name], value)
        skillsPhysique[name].value = newValue
        skillsPhysique[name].specialisation = newValue === 0 ? '' : skillsPhysique[name].specialisation
        this.setState({skillsPhysique})
        this.updateStade(name, newValue)
        this.checkSkillsRules()
        .then(p => {

            if(name === 'artisanat') {
                const artisanatSpe = this.state.artisanatSpe
                artisanatSpe.need = newValue > 0
                this.setState({artisanatSpe})
            }
        })
        
        setTimeout(() => {
            this.checkSpecialisationRules()
            this.checkFreeSpecialisationObtain() 
        }, 20);
    }

    handleSkillsSocialChange = event => {
        const { id } = event.target  

        const infoArray = this.extractId(id)
        const name = infoArray[1]
        const value = infoArray[2] 
        
        const skillsSocial = { ...this.state.skillsSocial }
        const newValue = this.newDotValue(skillsSocial[name], value)
        skillsSocial[name].value = newValue
        skillsSocial[name].specialisation = newValue === 0 ? '' : skillsSocial[name].specialisation
        this.setState({skillsSocial})
        this.updateStade(name, newValue)
        this.checkSkillsRules()
        .then(p => {

            if(name === 'performance') {
                const performanceSpe = this.state.performanceSpe
                performanceSpe.need = newValue > 0
                this.setState({performanceSpe})
            }
        })
        
        setTimeout(() => {
            this.checkSpecialisationRules()
            this.checkFreeSpecialisationObtain() 
        }, 20);
    }

    handleSkillsMentalChange = event => {
        const { id } = event.target  

        const infoArray = this.extractId(id)
        const name = infoArray[1]
        const value = infoArray[2] 
        
        const skillsMental = { ...this.state.skillsMental }
        const newValue = this.newDotValue(skillsMental[name], value)
        skillsMental[name].value = newValue
        skillsMental[name].specialisation = newValue === 0 ? '' : skillsMental[name].specialisation
        this.setState({skillsMental})
        this.updateStade(name, newValue)
        this.checkSkillsRules()
        .then(p => {

            if(name === 'erudition') {
                const eruditionSpe = this.state.eruditionSpe 
                eruditionSpe.need = newValue > 0
                this.setState({eruditionSpe})
            }
            if(name === 'sciences') {
                const sciencesSpe = this.state.sciencesSpe
                sciencesSpe.need = newValue > 0
                this.setState({sciencesSpe})
            }
        })
        
        setTimeout(() => {
            this.checkSpecialisationRules()
            this.checkFreeSpecialisationObtain() 
        }, 20);
    }

    handleSkillPhysiqueSpecialisationChange = event => {
        const { id, value } = event.target  
        const infoArray = this.extractId(id)
        const name = infoArray[1]
        const skillsPhysique = { ...this.state.skillsPhysique }
        skillsPhysique[name].specialisation = value
        this.setState({skillsPhysique})
        this.updateStade(`${name}Spe`, value)
        this.checkSpecialisationRules()
        this.checkFreeSpecialisationObtain() 
    }

    handleSkillSocialSpecialisationChange = event => {
        const { id, value } = event.target         
        const infoArray = this.extractId(id)
        const name = infoArray[1]
        const skillsSocial = { ...this.state.skillsSocial }
        skillsSocial[name].specialisation = value
        this.setState({skillsSocial})
        this.updateStade(`${name}Spe`, value)
        this.checkSpecialisationRules()
        this.checkFreeSpecialisationObtain() 
    }

    handleSkillMentalSpecialisationChange = event => {
        const { id, value } = event.target         
        const infoArray = this.extractId(id)
        const name = infoArray[1]
        const skillsMental = { ...this.state.skillsMental }
        skillsMental[name].specialisation = value
        this.setState({skillsMental})
        this.updateStade(`${name}Spe`, value)
        this.checkSpecialisationRules()
        this.checkFreeSpecialisationObtain() 
    }

    newDotValue = (item, nextValue, min) => {
        console.log(item)
        const minValue = min === undefined ? this.state.rules.minValue :  min
        const maxValue = this.state.rules.maxValue
        const vampireItemValue = this.state.vampire[item.id] 
        return (
            vampireItemValue < nextValue 
            ? 
                vampireItemValue === maxValue ? maxValue : vampireItemValue + 1
            :
                vampireItemValue === minValue ? minValue : vampireItemValue - 1

        )
    }
    
    renderWillpowerDot = (newValue, name) => {
        const calculateData = { ...this.state.calculateData }
        const volonteValue = newValue + (name === 'sansFroid' ?  this.state.vampire.resolution : this.state.vampire.sansFroid)
        calculateData['volonte'].value = volonteValue
        const vampire = { ...this.state.vampire }
        vampire['volonte'] = volonteValue
        vampire[name] = newValue
        this.setState({calculateData})
        this.setState({vampire})
    }

    updateStade = (id, value ) => {
        const vampire = { ...this.state.vampire }
        vampire[id] = value
        this.setState({vampire})
    }

    checkAttributesRules = () => {
        const valueArray = Object.keys(this.state.attributesPhysique)
        .map(key => this.state.attributesPhysique[key].value)
        valueArray.push(...Object.keys(this.state.attributesSocial)
        .map(key => this.state.attributesSocial[key].value))
        valueArray.push(...Object.keys(this.state.attributesMental)
        .map(key => this.state.attributesMental[key].value))

        const rules = { ...this.state.rules.attributes }
        Object.keys(rules).map(key => rules[key].use = false )
        valueArray.forEach(value => {
            let checked = false
            Object.keys(rules).map(key => {
                if(checked === false && rules[key].use === false && rules[key].value === value){
                    rules[key].use = true
                    checked = true
                } 
                return true 
            })
        })

        let attributesRulesRespected = { ...this.state.attributesRulesRespected}
        attributesRulesRespected = true 
        Object.keys(rules).map(key => {
            if(rules[key].use === false) { attributesRulesRespected = false } 
            return true 
        })
        this.setState({attributesRulesRespected})
    }

    handleSkillCharacterTypeChange = event => {
        const { id } = event.target  
        let skillCharacterType = {...this.state.skillCharacterType}
        skillCharacterType = id
        this.setState({ skillCharacterType })
        setTimeout(() => {
            this.checkSkillsRules() 
        }, 20);
    }
    
    checkSkillsRules = () => { 
        return new Promise ( (resolve, reject) => {
            const valueArray = Object.keys(this.state.skillsPhysique)
            .map(key => this.state.skillsPhysique[key].value)
            valueArray.push(...Object.keys(this.state.skillsSocial)
            .map(key => this.state.skillsSocial[key].value))
            valueArray.push(...Object.keys(this.state.skillsMental)
            .map(key => this.state.skillsMental[key].value))

            const rules = this.state.skillCharacterType === '' ? '' :
                this.state.skillCharacterType === 'toucheATout' ? this.state.rules.toucheATout :
                this.state.skillCharacterType === 'equilibre' ? this.state.rules.equilibre :
                this.state.skillCharacterType === 'specialiste' ? this.state.rules.specialiste : ''

            Object.keys(rules).map(key => rules[key].use = false )
            valueArray.forEach(value => {
                let checked = false
                Object.keys(rules).map(key => {
                    if(checked === false && rules[key].use === false && rules[key].value === value){
                        rules[key].use = true
                        checked = true
                    } 
                    return true 
                })
            })
            let skillsRulesRespected = { ...this.state.skillsRulesRespected}
            skillsRulesRespected = true 
            Object.keys(rules).map(key => {
                if(rules[key].use === false) { skillsRulesRespected = false } 
                return true 
            })
            
            this.setState({skillsRulesRespected})
            
            resolve(true)
        })

    }

    checkFreeSpecialisationObtain = () => { 
        const skillsArray = Object.keys(this.state.skillsPhysique)
        .map(key => this.state.skillsPhysique[key])
        skillsArray.push(...Object.keys(this.state.skillsSocial)
        .map(key => this.state.skillsSocial[key]))
        skillsArray.push(...Object.keys(this.state.skillsMental)
        .map(key => this.state.skillsMental[key]))

        let count = 0
        skillsArray.forEach(skill => {
            if(skill.id !== 'artisanat' && skill.id !== 'performance' && skill.id !== 'erudition' && skill.id !== 'sciences' && skill.specialisation !== ''){
                count++
            }          
        })
        
        const spe = {...this.state.spe}
        spe.obtain =  count === 1
        this.setState({spe})
    }

    checkSpecialisationRules = () => { 
        const skillsArray = Object.keys(this.state.skillsPhysique)
        .map(key => this.state.skillsPhysique[key])
        skillsArray.push(...Object.keys(this.state.skillsSocial)
        .map(key => this.state.skillsSocial[key]))
        skillsArray.push(...Object.keys(this.state.skillsMental)
        .map(key => this.state.skillsMental[key]))

        const needArtisanat = this.state.artisanatSpe.need
        const needEdrudition = this.state.eruditionSpe.need
        const needPerformance = this.state.performanceSpe.need
        const needSciences = this.state.sciencesSpe.need

        let needSpeChecked = false
        let needArtisanatChecked = false
        let needEdruditionChecked = false
        let needPerformanceChecked = false
        let needSciencesChecked = false
        let count = 0
        skillsArray.forEach(skill => {
            if(skill.id !== 'artisanat' && skill.id !== 'performance' && skill.id !== 'erudition' && skill.id !== 'sciences' && skill.specialisation !== ''){
                console.log(skill.id)
                count++
            }          
            else if(skill.id === 'artisanat' && needArtisanat && skill.specialisation !== '') {
                needArtisanatChecked = true
            }          
            else if(skill.id === 'performance' && needEdrudition && skill.specialisation !== '') {
                needEdruditionChecked = true
            }          
            else if(skill.id === 'erudition' && needPerformance && skill.specialisation !== '') {
                needPerformanceChecked = true
            }          
            else if(skill.id === 'sciences' && needSciences && skill.specialisation !== '') {
                needSciencesChecked = true
            }
        })
        needSpeChecked = count === 1

        let specialisationRulesRespected = this.state.specialisationRulesRespected
        
        specialisationRulesRespected = (needSpeChecked &&
        (!needArtisanat || (needArtisanat && needArtisanatChecked)) &&
        (!needEdrudition || (needEdrudition && needEdruditionChecked)) &&
        (!needPerformance || (needPerformance && needPerformanceChecked)) &&
        (!needSciences || (needSciences && needSciencesChecked)))
        
        this.setState({specialisationRulesRespected})
    }

    handleDisciplineChange = event => {
        const { id } = event.target  
        const infoArray = this.extractId(id)
        const name = infoArray[1]
        const value = infoArray[2] 
        
        const disciplines = { ...this.state.disciplines }
        const newValue = this.newDotValue(disciplines[name], value)
        disciplines[name].value = newValue
        this.setState({disciplines})
        this.updateStade(name, newValue)        
        setTimeout(() => {
            this.checkDisciplinesRules() 
        }, 20);
    }

    checkDisciplinesRules = () => {
        const clanDisciplinesString = this.state.clans[this.state.vampire.clan].disciplines
        const clanSplit = this.extractId(clanDisciplinesString)
        const clanDisciplineArray = []
        clanSplit.forEach(discipline => clanDisciplineArray.push(this.state.disciplines[discipline]))

        const rules = this.state.vampire.clan === 'caitiff' ?  { ...this.state.rules.disciplinesCaitif } : { ...this.state.rules.disciplines }
        Object.keys(rules).map(key => rules[key].use = false )
        clanDisciplineArray.forEach(clanDiscipline => {
            let checked = false
            Object.keys(rules).map(key => {
                if(checked === false && rules[key].use === false && rules[key].value === clanDiscipline.value){
                    rules[key].use = true
                    checked = true
                } 
                return true 
            })
        })

        let disciplineRulesRespected = { ...this.state.disciplineRulesRespected}
        disciplineRulesRespected = true 
        Object.keys(rules).map(key => {
            if(rules[key].use === false) { disciplineRulesRespected = false } 
            return true 
        })
        this.setState({disciplineRulesRespected})
    }

    extractId = (id) => id.split('-')

    resetFrom = () => {
        // this.setState({... attributes})
    }
    
    handleSubmitNewVampire = event =>{
        const vampire = {...this.state.vampire}
        this.props.handleAddNewVampire(vampire)
        this.resetFrom()
    }

    render () {

        const characteristics = Object.keys(this.state.characteristics)
        .map(key => <Characteristic key = {key} details = {this.state.characteristics[key]} handleCharacteristicChange={this.handleCharacteristicChange} />)

        const attributesPhysique = Object.keys(this.state.attributesPhysique)
        .map(key => <Ability key = {key} isUgly={this.state.isUgly} details={this.state.attributesPhysique[key]} handleAttribute = {this.handleAttributesPhysiqueChange}/>)

        const attributesSocial = Object.keys(this.state.attributesSocial)
        .map(key => <Ability key = {key} isUgly={this.state.isUgly} details={this.state.attributesSocial[key]} handleAttribute = {this.handleAttributesSocialChange}/>)

        const attributesMental = Object.keys(this.state.attributesMental)
        .map(key => <Ability key = {key} isUgly={this.state.isUgly} details={this.state.attributesMental[key]} handleAttribute = {this.handleAttributesMentalChange}/>)
        
        const attributesRules = Object.keys(this.state.rules.attributes)
        .map(key => <RuleDot key = {key} details={this.state.rules.attributes[key]} />)
        
        const renderAttributesRules = this.state.attributesRulesRespected ? 
            <FontAwesomeIcon icon={faCheckCircle} /> :
            attributesRules

        const toucheATout = Object.keys(this.state.rules.toucheATout)
        .map(key => <RuleDot key = {key} details={this.state.rules.toucheATout[key]} />)
        
        const equilibre = Object.keys(this.state.rules.equilibre)
        .map(key => <RuleDot key = {key} details={this.state.rules.equilibre[key]} />)
        
        const specialiste = Object.keys(this.state.rules.specialiste)
        .map(key => <RuleDot key = {key} details={this.state.rules.specialiste[key]} />)
            
        const renderSkillsRules = this.state.skillsRulesRespected ? 
            <FontAwesomeIcon icon={faCheckCircle} /> :
            this.state.skillCharacterType === '' ? '' :
            this.state.skillCharacterType === 'toucheATout' ? toucheATout :
            this.state.skillCharacterType === 'equilibre' ? equilibre :
            this.state.skillCharacterType === 'specialiste' ? specialiste : ''
        
            
        const renderSpecialisationRules = this.state.specialisationRulesRespected ? 
            <FontAwesomeIcon icon={faCheckCircle} /> :
            <SpecialisationRules 
            needArtisanat={this.state.artisanatSpe.need}
            needEdrudition={this.state.eruditionSpe.need}
            needPerformance={this.state.performanceSpe.need}
            needSciences={this.state.sciencesSpe.need}
            
            handleSpecialisationChange={this.handleSpecialisationChange}

            freeObtain={this.state.spe.obtain}
            artisanatObtain={this.state.skillsPhysique.artisanat.specialisation !== ''}
            eruditionObtain={this.state.skillsMental.erudition.specialisation !== ''}
            performanceObtain={this.state.skillsSocial.performance.specialisation !== ''}
            sciencesObtain={this.state.skillsMental.sciences.specialisation !== ''}
            />


        const skillsPhysique = this.state.skillCharacterType !== '' ? Object.keys(this.state.skillsPhysique)
        .map(key => <Skill key = {key} details={this.state.skillsPhysique[key]} handleSkill = {this.handleSkillsPhysiqueChange} handleSkillSpecialisationChange={this.handleSkillPhysiqueSpecialisationChange} />)
        : ''

        const skillsSocial = this.state.skillCharacterType !== '' ?  Object.keys(this.state.skillsSocial)
        .map(key => <Skill key = {key} details={this.state.skillsSocial[key]} handleSkill = {this.handleSkillsSocialChange} handleSkillSpecialisationChange={this.handleSkillSocialSpecialisationChange} />)
        : ''

        const skillsMental = this.state.skillCharacterType !== '' ?  Object.keys(this.state.skillsMental)
        .map(key => <Skill key = {key} details={this.state.skillsMental[key]} handleSkill = {this.handleSkillsMentalChange} handleSkillSpecialisationChange={this.handleSkillMentalSpecialisationChange} />)
        : ''

        const clanDisciplinesString = this.state.clans[this.state.vampire.clan].disciplines
        const clanSplit = this.extractId(clanDisciplinesString)
        const clanDisciplineArray = []
        clanSplit.forEach(discipline => clanDisciplineArray.push(this.state.disciplines[discipline]))
        const disciplines = Object.keys(clanDisciplineArray)
        .map(key => <Discipline key = {key} details={clanDisciplineArray[key]} handleDisciplineChange={this.handleDisciplineChange} isSangClair={ this.state.vampire.clan === 'sangclair' ? true : false }/>)
        
        const disciplinesRules = this.state.vampire.clan === 'caitiff' ? Object.keys(this.state.rules.disciplinesCaitif)
        .map(key => <RuleDot key = {key} details={this.state.rules.disciplinesCaitif[key]} />) :
        Object.keys(this.state.rules.disciplines)
        .map(key => <RuleDot key = {key} details={this.state.rules.disciplines[key]} />)

        const renderDisciplinesRules = this.state.disciplineRulesRespected || this.state.vampire.clan === 'sangclair'? 
            <FontAwesomeIcon icon={faCheckCircle} /> :
            disciplinesRules


        return (
            <Container className='mt-3' id='add-vapire-m5'>
                <Button onClick={this.handleSubmitNewVampire} variant="dark">Enregistrer</Button>
                <Row>
                    <Col lg={12} className="text-center">
                        <h1 className="mt-2 mb-2">Vampire</h1>
                    </Col>
                </Row>
                
                <Row>
                    <Col lg={12} className="text-center">
                        <h6>La Masquarade</h6>
                    </Col>
                </Row>

                <Form >
                    <Row>
                        <Col lg={12} className="text-center">
                            <Clans clans={this.state.clans} handleClanChange={this.handleClanChange} />
                        </Col>
                    </Row>
                    {/* CHARACTERISTICS */}
                    <Row>
                        {characteristics}
                        
                        <Col  md={4}>
                            <Form.Group className="mb-3" >
                                <Form.Label>Clan</Form.Label>
                                <Form.Control 
                                type="text" 
                                readOnly
                                value={ this.state.clans[this.state.vampire.clan].name }  
                                >
                                </Form.Control>
                            </Form.Group>
                        </Col>
                    </Row>
                    
                    
                    {/* ATTRIBUTES */}
                    <Row>
                        <Col lg={12} className="text-center">
                            <h3 className="mt-2 mb-2">Attributes</h3> 
                            {renderAttributesRules}
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={4}>
                            <h5 className="mt-2 mb-2 text-center">Physique</h5>
                            { attributesPhysique }
                        </Col>
                        <Col lg={4}>
                            <h5 className="mt-2 mb-2 text-center">Social</h5>
                            { attributesSocial }
                        </Col>
                        <Col lg={4}>
                            <h5 className="mt-2 mb-2 text-center">Mental</h5>
                            { attributesMental }
                        </Col> 
                    </Row>
                    <Row>
                        <Col>
                            <Square key={this.state.calculateData.volonte.id} details={this.state.calculateData.volonte} />
                        </Col>
                        <Col>
                            <Square key={this.state.calculateData.sante.id} details={this.state.calculateData.sante} />
                        </Col>
                    </Row>

                    {/* SHILLS */}
                    <Row>
                        <Col lg={12} className="text-center">
                            <h3 className="mt-2 mb-2">Compétences</h3>
                        </Col>
                        <Col lg={12} className="text-center">
                            <SkillsCharacterType handleSkillCharacterTypeChange= {this.handleSkillCharacterTypeChange} />
                            { renderSkillsRules }
                        </Col>
                        <Col lg={12} className="text-center">
                            { renderSpecialisationRules }
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={4}>
                            { skillsPhysique }
                        </Col>
                        <Col lg={4}>
                            { skillsSocial }
                        </Col>
                        <Col lg={4}>
                            { skillsMental }
                        </Col> 
                    </Row>
                    <Row>
                        <Col lg={12} className="text-center">
                            <h3 className="mt-2 mb-2">Disciplines</h3>
                            
                            {renderDisciplinesRules}
                        </Col>
                        {disciplines}
                    </Row>
                    <Row>

                    </Row>
                </Form>

            </Container>


          
        )
    }
}

export default NewVampire