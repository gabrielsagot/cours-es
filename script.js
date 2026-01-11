// Data Structure for Slides
const slidesData = [
    {
        id: 1,
        title: "TITLE SLIDE",
        canva: {
            title: "Demographic Models Explained to High School Students",
            subtitle: "A Teaching Project by BUT SD Students",
            content: [
                "Lycée Jean Macé de Niort × IUT de Poitiers",
                "Gabriel Sagot & Orian [Nom]",
                "January 12, 2026"
            ],
            visuals: "• Logo officiel de l'IUT de Poitiers (haut droite ou bas gauche)<br>• Logo du Lycée Jean Macé de Niort (symétrie)<br>• Image de fond : graphique démographique stylisé, pyramide des âges moderne, ou photo de lycéens (discrète/transparence)"
        },
        speech: {
            gabriel: "- Good morning everyone<br>- We are Gabriel and Orian<br>- We are second-year students in Data Science at IUT Poitiers",
            orian: "- Today, we will present our tutored project<br>- It consists in teaching demographic models to high school students<br>- This is a partnership with Lycée Jean Macé in Niort<br>- Our presentation will last approximately fifteen minutes"
        },
        summary: "<strong>Gabriel :</strong> Bonjour à tous. Nous sommes Gabriel et Orian, étudiants en deuxième année de BUT Science des Données à l'IUT de Poitiers.<br><br><strong>Orian :</strong> Aujourd'hui, nous allons vous présenter notre projet tuteuré qui consiste à enseigner les modèles démographiques à des lycéens de Terminale. C'est un partenariat avec le lycée Jean Macé de Niort. Notre présentation durera environ quinze minutes.",
        vocab: [
            { en: "Good morning everyone", fr: "Bonjour à tous" },
            { en: "We will present our tutored project", fr: "Nous allons présenter notre projet tuteuré" },
            { en: "It consists in teaching", fr: "Cela consiste à enseigner" },
            { en: "High school students", fr: "Lycéens" },
            { en: "Our presentation will last approximately fifteen minutes", fr: "Notre présentation durera environ quinze minutes" },
            { en: "Demographic models", fr: "Modèles démographiques" },
            { en: "Tutored project", fr: "Projet tuteuré" },
            { en: "BUT (Bachelor of Technology)", fr: "BUT" },
            { en: "Data Science", fr: "Science des Données" },
            { en: "Second-year students", fr: "Étudiants de deuxième année" },
            { en: "Final year students (Terminale)", fr: "Élèves de Terminale" },
            { en: "Partnership", fr: "Partenariat" },
            { en: "Teaching", fr: "Enseignement" }
        ],
        timing: "30 secondes max"
    },
    // Placeholder objects for other slides to be filled later
    {
        id: 2,
        title: "SOMMAIRE / AGENDA",
        canva: {
            title: "Agenda",
            subtitle: "Presentation Outline",
            content: [
                "1. Project Context",
                "2. Our Mission",
                "3. Target Audience",
                "4. Planning & Schedule",
                "5. Organization with Trello",
                "6. Our Pedagogical Approach",
                "7. First Session Results",
                "8. What Works / Challenges",
                "9. Conclusion"
            ],
            visuals: "• Icônes simples (🎯 Mission, 👥 Audience, 📅 Planning, etc.)<br>• Design épuré, liste verticale claire<br>• Numéro de slide '2/11' discret en bas"
        },
        speech: {
            gabriel: "- Here is the outline of our presentation<br>- First, we will introduce the project context and explain who we are working with<br>- Then, we will detail our mission and the target audience",
            orian: "- We will show you our planning and how we organized our work with Trello<br>- After that, we will present our pedagogical approach and the tools we chose<br>- Finally, we will share the results of our first session, the challenges we faced, and our conclusion"
        },
        summary: "<strong>Gabriel :</strong> Voici le plan de notre présentation. D'abord, nous introduirons le contexte du projet et expliquerons avec qui nous travaillons. Ensuite, nous détaillerons notre mission et le public cible.<br><br><strong>Orian :</strong> Nous vous montrerons notre planning et comment nous avons organisé notre travail avec Trello. Après cela, nous présenterons notre démarche pédagogique et les outils que nous avons choisis. Finalement, nous partagerons les résultats de notre première session, les défis rencontrés, et notre conclusion.",
        vocab: [
            { en: "Here is the outline of our presentation", fr: "Voici le plan de notre présentation" },
            { en: "We will introduce", fr: "Nous allons présenter" },
            { en: "We will detail", fr: "Nous allons détailler" },
            { en: "We will show you", fr: "Nous allons vous montrer" },
            { en: "We will share", fr: "Nous allons partager" },
            { en: "The challenges we faced", fr: "Les défis que nous avons rencontrés" },
            { en: "Agenda / Outline", fr: "Plan, sommaire" },
            { en: "Project context", fr: "Contexte du projet" },
            { en: "Mission", fr: "Mission" },
            { en: "Target audience", fr: "Public cible" },
            { en: "Planning & Schedule", fr: "Planification et calendrier" },
            { en: "Pedagogical approach", fr: "Démarche pédagogique" },
            { en: "Tools", fr: "Outils" },
            { en: "Results", fr: "Résultats" },
            { en: "Challenges", fr: "Défis, difficultés" },
            { en: "Next steps", fr: "Prochaines étapes" }
        ],
        timing: "45 sec - 1 min"
    },
    {
        id: 3,
        title: "PROJECT CONTEXT",
        canva: {
            title: "Project Context",
            subtitle: "Where and with whom?",
            content: [
                "<strong>Partner Institution:</strong><br>• Lycée Jean Macé de Niort<br>• General and Technological High School<br>• Located in Niort, Deux-Sèvres (79)",
                "<strong>The Students:</strong><br>• 32 high school students<br>• Final year (Terminale)<br>• 'Enseignement Scientifique' program<br>• Very heterogeneous group",
                "<strong>Our Role:</strong><br>• BUT Data Science students (IUT Poitiers)<br>• Teachers for this project<br>• Supervised by university professors"
            ],
            visuals: "• Photo de la façade du Lycée Jean Macé<br>• Logo du lycée Jean Macé (coloré)<br>• Carte géographique Niort/Poitiers<br>• Photo d'une classe de lycée (générique)<br>• Icône 'partenariat'"
        },
        speech: {
            gabriel: "- Let's start with the project context<br>- We are working with Lycée Jean Macé, which is a general and technological high school located in Niort<br>- This high school is about thirty kilometers from our university in Poitiers",
            orian: "- Our audience consists of thirty-two students in their final year of high school<br>- They are taking a scientific education program called 'Enseignement Scientifique'<br>- It's important to note that this is a very heterogeneous group, with students having different levels and backgrounds in mathematics and data analysis"
        },
        summary: "<strong>Gabriel :</strong> Commençons par le contexte du projet. Nous travaillons avec le Lycée Jean Macé, qui est un lycée d'enseignement général et technologique situé à Niort. Ce lycée se trouve à environ trente kilomètres de notre université à Poitiers.<br><br><strong>Orian :</strong> Notre public est composé de trente-deux élèves en classe de Terminale. Ils suivent un programme d'enseignement scientifique appelé 'Enseignement Scientifique'. Il est important de noter qu'il s'agit d'un groupe très hétérogène, avec des élèves ayant des niveaux et parcours différents en mathématiques et analyse de données.",
        vocab: [
            { en: "Let's start with", fr: "Commençons par" },
            { en: "We are working with", fr: "Nous travaillons avec" },
            { en: "Located in", fr: "Situé à" },
            { en: "It's important to note that", fr: "Il est important de noter que" },
            { en: "Consists of", fr: "Est composé de" },
            { en: "Having different levels", fr: "Ayant des niveaux différents" },
            { en: "Project context", fr: "Contexte du projet" },
            { en: "General and technological high school", fr: "Lycée d'enseignement général et technologique" },
            { en: "Final year of high school", fr: "Classe de Terminale" },
            { en: "Scientific education program", fr: "Programme d'enseignement scientifique" },
            { en: "Heterogeneous group", fr: "Groupe hétérogène" },
            { en: "Backgrounds", fr: "Parcours, formations antérieures" },
            { en: "Audience", fr: "Public, auditoire" },
            { en: "About thirty kilometers", fr: "Environ trente kilomètres" }
        ],
        timing: "1 min"
    },
    {
        id: 4,
        title: "THE MISSION",
        canva: {
            title: "The Mission",
            subtitle: "A dual educational objective",
            content: [
                "<strong>For the High School Students:</strong><br>• Learn about demographic models<br>• Understand population dynamics<br>• Discover data science applications<br>• Explore higher education opportunities (BUT SD)",
                "<strong>For Us (BUT SD Students):</strong><br>• Develop communication skills<br>• Practice scientific vulgarization<br>• Learn to adapt content to different audiences<br>• Experience project management<br>• Think about our professional future"
            ],
            visuals: "• Icône 'enseignement' (professeur/tableau)<br>• Graphique démographique simple<br>• Icône 'compétences'<br>• Schéma double flèche (lycéens <-> étudiants)<br>• <em>Citation optionnelle sur le BUT SD</em>"
        },
        speech: {
            gabriel: "- Our mission has a dual educational objective<br>- For the high school students, the goal is to teach them about demographic models and population dynamics<br>- This also gives them an opportunity to discover data science and explore potential higher education paths",
            orian: "- For us, as BUT Data Science students, this project is an opportunity to develop essential professional skills<br>- We need to practice scientific vulgarization, which means explaining complex concepts in simple terms<br>- This aligns perfectly with our national program, which emphasizes that data science graduates must be able to communicate results through presentations, dashboards, and oral restitutions"
        },
        summary: "<strong>Gabriel :</strong> Notre mission a un double objectif éducatif. Pour les lycéens, le but est de leur enseigner les modèles démographiques et la dynamique des populations. Cela leur donne aussi l'opportunité de découvrir la science des données et d'explorer des parcours potentiels dans l'enseignement supérieur.<br><br><strong>Orian :</strong> Pour nous, en tant qu'étudiants en BUT Science des Données, ce projet est une opportunité de développer des compétences professionnelles essentielles. Nous devons pratiquer la vulgarisation scientifique, ce qui signifie expliquer des concepts complexes en termes simples. Cela correspond parfaitement à notre programme national, qui souligne que les diplômés en science des données doivent être capables de communiquer les résultats à travers des présentations, des tableaux de bord et des restitutions orales.",
        vocab: [
            { en: "Our mission has a dual objective", fr: "Notre mission a un double objectif" },
            { en: "The goal is to teach", fr: "Le but est d'enseigner" },
            { en: "This gives them an opportunity to", fr: "Cela leur donne l'opportunité de" },
            { en: "For us, as students", fr: "Pour nous, en tant qu'étudiants" },
            { en: "An opportunity to develop", fr: "Une opportunité de développer" },
            { en: "This aligns perfectly with", fr: "Cela correspond parfaitement à" },
            { en: "Which means", fr: "Ce qui signifie" },
            { en: "Dual objective", fr: "Double objectif" },
            { en: "Demographic models", fr: "Modèles démographiques" },
            { en: "Population dynamics", fr: "Dynamique des populations" },
            { en: "Data science", fr: "Science des données" },
            { en: "Scientific vulgarization", fr: "Vulgarisation scientifique" },
            { en: "Complex concepts", fr: "Concepts complexes" },
            { en: "Simple terms", fr: "Termes simples" }
        ],
        timing: "1 min - 1 min 15"
    },
    {
        id: 5,
        title: "TARGET AUDIENCE",
        canva: {
            title: "Target Audience",
            subtitle: "Who are we teaching?",
            content: [
                "<strong>Student Profile:</strong><br>• 32 students in total<br>• Age: 17-18 years old<br>• Level: Final year (Terminale)<br>• Program: Enseignement Scientifique",
                "<strong>Key Characteristics:</strong><br>• Very heterogeneous group<br>• Different academic backgrounds<br>• Various levels in mathematics",
                "<strong>Official Curriculum:</strong><br>• Theme: 'Science, climate, and society'<br>• Objective: Understanding population evolution and its impacts",
                "<strong>Their Needs:</strong><br>• Clear and accessible explanations<br>• Concrete examples & Real-world applications<br>• Preparation for higher education"
            ],
            visuals: "• Icône 'groupe' ou silhouettes<br>• Graphique diversité (niveaux/profils)<br>• Image programme officiel Terminale (Science, Climat, Société)<br>• Photo de classe générique"
        },
        speech: {
            gabriel: "- Let me describe our target audience in more detail<br>- We are teaching thirty-two students aged seventeen to eighteen<br>- They are in their final year of high school, taking a scientific education program<br>- This is a very diverse group with different academic backgrounds and levels, especially in mathematics",
            orian: "- It's important to understand that demographic models are actually part of their official curriculum<br>- They study this topic under the theme 'Science, climate, and society'<br>- The official objective is to help them understand population evolution and its impacts on society<br>- Our challenge is to make these concepts accessible and engaging for all students, regardless of their level"
        },
        summary: "<strong>Gabriel :</strong> Laissez-moi décrire notre public cible plus en détail. Nous enseignons à trente-deux élèves âgés de dix-sept à dix-huit ans. Ils sont en dernière année de lycée, suivant un programme d'enseignement scientifique. C'est un groupe très diversifié avec différents parcours académiques et niveaux, particulièrement en mathématiques.<br><br><strong>Orian :</strong> Il est important de comprendre que les modèles démographiques font réellement partie de leur programme officiel. Ils étudient ce sujet sous le thème 'Science, climat et société'. L'objectif officiel est de les aider à comprendre l'évolution des populations et ses impacts sur la société. Notre défi est de rendre ces concepts accessibles et engageants pour tous les élèves, quel que soit leur niveau.",
        vocab: [
            { en: "Let me describe", fr: "Laissez-moi décrire" },
            { en: "In more detail", fr: "Plus en détail" },
            { en: "Aged seventeen to eighteen", fr: "Âgés de dix-sept à dix-huit ans" },
            { en: "It's important to understand that", fr: "Il est important de comprendre que" },
            { en: "Actually part of", fr: "Réellement partie de" },
            { en: "Regardless of their level", fr: "Quel que soit leur niveau" },
            { en: "Our challenge is to", fr: "Notre défi est de" },
            { en: "Target audience", fr: "Public cible" },
            { en: "Final year of high school", fr: "Dernière année de lycée" },
            { en: "Scientific education program", fr: "Programme d'enseignement scientifique" },
            { en: "Diverse / Heterogeneous group", fr: "Groupe diversifié / hétérogène" },
            { en: "Academic backgrounds", fr: "Parcours académiques" },
            { en: "Official curriculum", fr: "Programme officiel" },
            { en: "Population evolution", fr: "Évolution des populations" }
        ],
        timing: "1 min - 1 min 15"
    },
    {
        id: 6,
        title: "PLANNING & SCHEDULE",
        canva: {
            title: "Planning & Schedule",
            subtitle: "4 teaching sessions from January to February 2026",
            content: [
                "<strong>Session 1: Small Group (TD) ✅</strong><br>• Format: 1 hour<br>• Students: 16 students (half class)<br>• Location: Lycée Jean Macé<br>• Status: COMPLETED",
                "<strong>Session 2: Small Group (TD) 📅</strong><br>• Format: 1 hour<br>• Students: 16 students (second half)<br>• Location: Lycée Jean Macé<br>• Status: TO COME",
                "<strong>Session 3 & 4: Full Class 📅</strong><br>• Format: 1 or 2 hours × 2 sessions<br>• Students: 32 students (entire class)<br>• Status: TO COME",
                "<strong>Final Session: IUT Visit 📅</strong><br>• Format: 2 hours at IUT Poitiers<br>• Date: Thursday afternoon, Feb 2026",
                "<strong>Schedule:</strong><br>• Monday mornings or Thursday mornings"
            ],
            visuals: "• Timeline horizontale ou verticale<br>• Icônes de calendrier<br>• Code couleur : Vert (Fait) vs Bleu (À venir)<br>• Photo IUT Poitiers (pour la fin)"
        },
        speech: {
            gabriel: "- Our project is structured around four teaching sessions spread from January to February twenty twenty-six<br>- We have already completed the first session, which was a one-hour workshop with a small group of sixteen students<br>- This took place at Lycée Jean Macé on a Monday morning",
            orian: "- The remaining sessions include another small group workshop with the other sixteen students<br>- Then, we will have two sessions with the entire class of thirty-two students, lasting one or two hours each<br>- Finally, we will welcome all students at IUT Poitiers for a two-hour session on a Thursday afternoon<br>- This final session at our university will allow students to discover our campus and facilities"
        },
        summary: "<strong>Gabriel :</strong> Notre projet est structuré autour de quatre sessions d'enseignement réparties de janvier à février 2026. Nous avons déjà complété la première session, qui était un atelier d'une heure avec un petit groupe de seize élèves. Cela s'est déroulé au Lycée Jean Macé un lundi matin.<br><br><strong>Orian :</strong> Les sessions restantes incluent un autre atelier en petit groupe avec les seize autres élèves. Ensuite, nous aurons deux sessions avec la classe entière de trente-deux élèves, durant une ou deux heures chacune. Finalement, nous accueillerons tous les élèves à l'IUT de Poitiers pour une session de deux heures un jeudi après-midi. Cette dernière session dans notre université permettra aux élèves de découvrir notre campus et nos installations.",
        vocab: [
            { en: "Our project is structured around", fr: "Notre projet est structuré autour de" },
            { en: "Spread from January to February", fr: "Réparti de janvier à février" },
            { en: "We have already completed", fr: "Nous avons déjà complété" },
            { en: "This took place at", fr: "Cela s'est déroulé à" },
            { en: "The remaining sessions", fr: "Les sessions restantes" },
            { en: "We will welcome", fr: "Nous accueillerons" },
            { en: "This will allow students to", fr: "Cela permettra aux élèves de" },
            { en: "Planning & Schedule", fr: "Planification et calendrier" },
            { en: "Teaching sessions", fr: "Sessions d'enseignement" },
            { en: "Workshop", fr: "Atelier" },
            { en: "Small group", fr: "Petit groupe" },
            { en: "Entire class", fr: "Classe entière" },
            { en: "Spread", fr: "Réparti, étalé" },
            { en: "Remaining", fr: "Restant" },
            { en: "Campus", fr: "Campus" },
            { en: "Facilities", fr: "Installations, équipements" }
        ],
        timing: "1 min"
    },
    {
        id: 7,
        title: "ORGANIZATION (TRELLO) 🇫🇷",
        canva: {
            title: "Organisation et Planification",
            subtitle: "Gestion de projet avec Trello",
            content: [
                "<strong>⚠️ NOTE : SECTION EN FRANÇAIS</strong>",
                "<strong>Tâches réalisées (Terminé) ✅</strong><br>• Prise de contact lycée<br>• Analyse programme officiel<br>• Préparation & Animation Session 1 (16 élèves)<br>• Débriefing Session 1",
                "<strong>Tâches en cours (En cours) 🔄</strong><br>• Préparation Session 2<br>• Ajustements post-Session 1<br>• Préparation soutenance orale",
                "<strong>Tâches restantes (À faire) 📋</strong><br>• Animation Session 2<br>• Préparation Sessions 3 & 4 (Classe entière)<br>• Organisation visite IUT<br>• Évaluation finale"
            ],
            visuals: "• <strong>Action : Montrer le Trello en direct !</strong><br>• Capture d'écran du tableau Trello (Back-up)<br>• Logo Trello<br>• Diagramme de Gantt simple (optionnel)"
        },
        speech: {
            gabriel: "- Pour organiser notre travail, nous utilisons l'outil Trello<br>- Comme vous pouvez le voir sur l'écran, nous avons créé un tableau de bord avec trois colonnes principales<br>- La colonne 'Terminé' montre les tâches que nous avons déjà accomplies<br>- Par exemple, nous avons pris contact avec le lycée, analysé le programme officiel, et bien sûr animé la première session",
            orian: "- La colonne 'En cours' contient les tâches sur lesquelles nous travaillons actuellement (Session 2, ajustements...)<br>- Dans la colonne 'À faire', vous voyez toutes les tâches restantes (Sessions classe entière, visite IUT...)<br>- Cette organisation nous permet de suivre notre progression et de ne rien oublier"
        },
        summary: "<strong>Action Recommandée :</strong> Ouvrir l'onglet Trello dans le navigateur pour le montrer en direct.<br><br><strong>Points clés :</strong> Expliquer la structure (3 colonnes), citer des exemples concrets de tâches faites/à faire, et souligner l'efficacité de la méthode pour la collaboration.",
        vocab: [
            { en: "Dashboard", fr: "Tableau de bord" },
            { en: "Columns", fr: "Colonnes" },
            { en: "Tasks", fr: "Tâches" },
            { en: "In progress", fr: "En cours" },
            { en: "Completed", fr: "Terminé" },
            { en: "To do", fr: "À faire" },
            { en: "So far", fr: "Jusqu'à présent" },
            { en: "Real-time tracking", fr: "Suivi en temps réel" }
        ],
        timing: "1 min - 1 min 30"
    },
    {
        id: 8,
        title: "OUR APPROACH",
        canva: {
            title: "Our Pedagogical Approach",
            subtitle: "How do we teach demographic models?",
            content: [
                "<strong>Our Teaching Philosophy:</strong><br>• Simplification without oversimplification<br>• Learning by doing (hands-on activities)<br>• Visual and interactive approach<br>• Real-world examples",
                "<strong>Step-by-Step Method:</strong><br>1. <strong>Introduction:</strong> Familiar examples (town/region)<br>2. <strong>Concept Building:</strong> Visual supports, no complex formulas<br>3. <strong>Practical Application:</strong> Real data, group work<br>4. <strong>Connection:</strong> Climate change, migration, aging populations"
            ],
            visuals: "• Schéma circulaire/pyramidal (4 étapes)<br>• Icônes (ampoule, escalier, mains, monde)<br>• Photo pyramide des âges annotée<br>• Image élèves en groupe"
        },
        speech: {
            gabriel: "- Let me explain our pedagogical approach<br>- We believe in simplification without oversimplification, which means making concepts accessible while keeping their scientific accuracy<br>- Our method is based on learning by doing, with hands-on activities rather than just theoretical lectures<br>- We always start with familiar examples, like demographic data from their own town or region, to engage students from the beginning",
            orian: "- Then, we introduce key demographic concepts progressively, using visual supports such as graphs and population pyramids<br>- We deliberately avoid complex mathematical formulas to keep everyone engaged<br>- Students work on practical activities with real data, often in small groups<br>- Finally, we connect demographic models to current issues like climate change, migration, and aging populations in Europe<br>- This perfectly aligns with their curriculum theme which is 'Science, climate, and society'"
        },
        summary: "<strong>Gabriel :</strong> Laissez-moi expliquer notre démarche pédagogique. Simplification sans sur-simplification (accessible mais rigoureux). Apprentissage par la pratique (activités concrètes). Nous commençons par des exemples familiers (leur ville) pour les engager.<br><br><strong>Orian :</strong> Introduction progressive avec supports visuels (graphiques), sans formules complexes. Activités pratiques en petits groupes sur données réelles. Lien avec enjeux actuels (climat, migration, vieillissement) correspondant à leur programme 'Science, climat et société'.",
        vocab: [
            { en: "Let me explain", fr: "Laissez-moi expliquer" },
            { en: "We believe in", fr: "Nous croyons en" },
            { en: "Learning by doing", fr: "Apprentissage par la pratique" },
            { en: "Hands-on activities", fr: "Activités pratiques" },
            { en: "Visual supports", fr: "Supports visuels" },
            { en: "Current issues", fr: "Enjeux actuels" },
            { en: "Simplification", fr: "Simplification" },
            { en: "Scientific accuracy", fr: "Rigueur scientifique" },
            { en: "Step by step", fr: "Étape par étape" }
        ],
        timing: "1 min 15 - 1 min 30"
    },

    {
        id: 9,
        title: "FIRST SESSION - RESULTS",
        canva: {
            title: "First Session - Results",
            subtitle: "08/01/26 • Objective: ~35 Slides/session",
            content: [
                "<strong>Session Details:</strong><br>• Date: 08/01/26 (2x 1h, Half groups)<br>• <strong>Goal Met:</strong> 44 slides covered (Target: ~35)",
                "<strong>Part 1: Intro & Context (Slides 1-8):</strong><br>• Presentation, Definition, Current Issues",
                "<strong>Part 2: Demography Basics (Slides 9-20):</strong><br>• Population factors (Births, Deaths, Migrations)<br>• Real data analysis (France, World)",
                "<strong>Part 3: Observation (Slides 21-30):</strong><br>• Linear vs Exponential evolution<br>• Absolute & Relative variations",
                "<strong>Part 4: Linear Model (Slides 31-44):</strong><br>• Arithmetic Sequences (Definition, Formula)<br>• Guided Examples (Calculations)"
            ],
            visuals: "• Photo de la classe pendant le cours (si dispo)<br>• Capture des slides clés (ex: Slide 44 Graphique)<br>• Indicateur de progression (44/35)"
        },
        speech: {
            gabriel: "- The first sessions on January 8th went very well<br>- We worked with two half-groups of sixteen students for one hour each<br>- Our pacing objective was to cover about thirty-five slides per session<br>- We comfortably exceeded this target by covering forty-four slides, reaching the end of our guided examples on the linear model",
            orian: "- We covered Part 1 (Introduction) and Part 2 (Demography Basics) where we defined key concepts like birth and death rates<br>- Then in Part 3, we observed concrete data evolutions and introduced absolute and relative variations<br>- Finally, we started Part 4 on the Linear Model, explaining arithmetic sequences and doing step-by-step calculations with the students<br>- The students were very attentive and the engagement level was high throughout all four parts"
        },
        summary: "<strong>Gabriel :</strong> Session du 08/01 réussie (2x 1h). Objectif d'avancée (35 slides) atteint et dépassé (44 slides faits).<br><br><strong>Orian :</strong> Contenu couvert : P1 Intro, P2 Bases Démographie (Facteurs), P3 Observations (Variations), P4 Modèle Linéaire (Suite Arithmétique & Exemples jusqu'à slide 44). Élèves à l'écoute.",
        vocab: [
            { en: "Pacing objective", fr: "Objectif de rythme/d'avancée" },
            { en: "Comfortably exceeded", fr: "Largement dépassé" },
            { en: "We covered", fr: "Nous avons couvert" },
            { en: "Demography Basics", fr: "Bases de la démographie" },
            { en: "Arithmetic sequences", fr: "Suites arithmétiques" },
            { en: "Step-by-step calculations", fr: "Calculs étape par étape" },
            { en: "Attentive", fr: "Attentif" },
            { en: "Linear Model", fr: "Modèle linéaire" },
            { en: "Guided examples", fr: "Exemples guidés" }
        ],
        timing: "1 min 30"
    },
    {
        id: 10,
        title: "WHAT WORKS / CHALLENGES",
        canva: {
            title: "What Works & Challenges",
            subtitle: "Assessment after the first session",
            content: [
                "<strong>✅ What Works Well:</strong><br>• <strong>Pacing:</strong> 38 slides covered (Target: ~35)<br>• <strong>Comprehension:</strong> Students take notes & understand keywords<br>• <strong>Presentation:</strong> We feel comfortable speaking",
                "<strong>⚠️ Areas for Improvement:</strong><br>• <strong>Whiteboard Usage:</strong> MUST use it for notes & exercises<br>• <strong>Mobility:</strong> Occupy the space, move around the class",
                "<strong>💡 Action Plan:</strong><br>• Force ourselves to write on the board<br>• Step away from the computer/screen"
            ],
            visuals: "• Photo de nous au tableau (idéalement)<br>• Icône Tableau blanc + Crayon<br>• Schéma de déplacement dans la classe"
        },
        speech: {
            gabriel: "- Regarding what works, we are very satisfied with the pacing<br>- We planned about thirty-five slides per session and managed to cover thirty-eight, so we are on track<br>- We also noticed that students seem to understand well; they are attentive and take notes of the key concepts we highlight<br>- Personally, we feel quite comfortable and at ease standing in front of the class",
            orian: "- However, there are two major points we absolutely need to improve<br>- First, we must use the whiteboard more effectively to write down key terms and solve exercises with them, instead of just relying on the screen<br>- Second, we need to work on our mobility<br>- We tend to stay too close to the computer, so we need to occupy the space and move around the classroom to engage students better"
        },
        summary: "<strong>Gabriel :</strong> Ce qui marche : Avancée (38 slides faits vs 35 prévus). Compréhension (élèves notent les mots-clés). Aisance à l'oral (on est confortables).<br><br><strong>Orian :</strong> À améliorer impérativement : Utiliser le TABLEAU (noter/exos). MOBILITÉ (occuper l'espace, bouger dans la classe, ne pas rester collés au PC).",
        vocab: [
            { en: "We are on track", fr: "Nous sommes dans les temps" },
            { en: "To take notes", fr: "Prendre des notes" },
            { en: "At ease", fr: "À l'aise" },
            { en: "Whiteboard", fr: "Tableau blanc" },
            { en: "Instead of relying on", fr: "Au lieu de se reposer sur" },
            { en: "Mobility", fr: "Mobilité" },
            { en: "Occupy the space", fr: "Occuper l'espace" }
        ],
        timing: "1 min 30"
    },
    {
        id: 11,
        title: "CONCLUSION & THANK YOU",
        canva: {
            title: "Conclusion",
            subtitle: "Thank you for your attention",
            content: [
                "<strong>Key Takeaways:</strong><br>• ✅ <strong>Achievement:</strong> Started teaching 32 students, Positive Session 1<br>• ✅ <strong>Skills:</strong> Communication, Adaptation, Project Management<br>• ✅ <strong>Impact:</strong> Students gaining knowledge & discovering Data Science",
                "<strong>Looking Forward:</strong><br>• 3 sessions remaining<br>• Continuous improvement<br>• Excited for IUT visit",
                "<strong>Thank You:</strong><br>• Lycée Jean Macé & Teachers<br>• Supervising professors<br>• IUT Poitiers<br>• You!"
            ],
            visuals: "• Image positive/inspirante<br>• Logos IUT / Lycée<br>• Icône 'Merci'<br>• Photo du groupe (si dispo)"
        },
        speech: {
            gabriel: "- To conclude our presentation, let me summarize the key points<br>- We have successfully launched this teaching project with Lycée Jean Macé<br>- Through this experience, we are developing essential professional skills, particularly in scientific communication and pedagogical adaptation<br>- One session is completed with positive results, and we have learned valuable lessons that will improve our remaining three sessions",
            orian: "- This project has a real impact: students are gaining knowledge about demographic models and discovering the Data Science field<br>- For us, it's a practical application of everything we learn in our BUT program and an excellent preparation for our professional future<br>- We would like to thank Lycée Jean Macé and its teachers for this opportunity, our supervising professors for their guidance, and of course, thank you all for your attention today<br>- We are now ready to answer any questions you may have"
        },
        summary: "<strong>Gabriel :</strong> Conclusion. Projet lancé avec succès. Compétences développées (Com, Adaptation). Résultats positifs session 1 et leçons apprises pour la suite.<br><br><strong>Orian :</strong> Impact réel (Connaissances élèves, Découverte Data Science). Application pratique du BUT et préparation pro. Remerciements (Lycée, Profs, Jury). Prêts pour les questions.",
        vocab: [
            { en: "To conclude", fr: "Pour conclure" },
            { en: "Let me summarize", fr: "Laissez-moi résumer" },
            { en: "Key takeaways", fr: "Points clés à retenir" },
            { en: "Successfully launched", fr: "Lancé avec succès" },
            { en: "Skills developed", fr: "Compétences développées" },
            { en: "Scientific communication", fr: "Communication scientifique" },
            { en: "Pedagogical adaptation", fr: "Adaptation pédagogique" },
            { en: "Practical application", fr: "Application pratique" },
            { en: "Professional future", fr: "Avenir professionnel" },
            { en: "We would like to thank", fr: "Nous aimerions remercier" },
            { en: "We are now ready", fr: "Nous sommes maintenant prêts" }
        ],
        timing: "1 min - 1 min 15"
    }
];

// Navigation Logic
function showSlide(id) {
    const slide = slidesData.find(s => s.id === id);
    if (!slide) return;

    // Find prev/next slides
    const currentIndex = slidesData.findIndex(s => s.id === id);
    const prevSlide = slidesData[currentIndex - 1];
    const nextSlide = slidesData[currentIndex + 1];

    // Build Content dynamically
    const contentContainer = document.getElementById('slide-content');
    contentContainer.innerHTML = `
        <div class="slide-header">
            <div class="header-left">
                <span class="slide-number-badge">${slide.id}</span>
                <h2>${slide.title}</h2>
            </div>
            <div class="slide-nav">
                ${prevSlide ? `<button onclick="showSlide(${prevSlide.id})" class="nav-button">← Préc.</button>` : ''}
                ${nextSlide ? `<button onclick="showSlide(${nextSlide.id})" class="nav-button">Suiv. →</button>` : ''}
            </div>
        </div>

        <div class="content-grid">
            <!-- CANVA SECTION -->
            <div class="content-card canva-card">
                <h3>🎨 Contenu Slide Canva</h3>
                ${slide.canva ? `
                    <div class="card-body">
                        <h4>${slide.canva.title || ''}</h4>
                        ${slide.canva.subtitle ? `<p class="subtitle-text">${slide.canva.subtitle}</p>` : ''}
                        <ul>
                            ${slide.canva.content ? slide.canva.content.map(point => `<li>${point}</li>`).join('') : ''}
                        </ul>
                        ${slide.canva.visuals ? `<div class="visuals-hint">💡 Visuels : ${slide.canva.visuals}</div>` : ''}
                    </div>
                ` : '<p class="empty-state">Contenu à définir...</p>'}
            </div>

            <!-- SPEECH SECTION -->
            <div class="content-card speech-card">
                <h3>🗣️ Répartition Parole</h3>
                ${slide.speech ? `
                    <div class="speech-block gabriel-block">
                        <div class="speaker-label">🎤 GABRIEL</div>
                        <p>${slide.speech.gabriel || "..."}</p>
                    </div>
                    <div class="speech-block orian-block">
                        <div class="speaker-label">🎤 ORIAN</div>
                        <p>${slide.speech.orian || "..."}</p>
                    </div>
                ` : '<p class="empty-state">Discours à définir...</p>'}
            </div>

            <!-- SUMMARY SECTION -->
            <div class="content-card summary-card">
                <h3>📝 Résumé Français</h3>
                <p>${slide.summary || "..."}</p>
            </div>

            <!-- VOCAB SECTION -->
            <div class="content-card vocab-card">
                <h3>🧠 Key Phrases & Vocab</h3>
                <ul>
                    ${slide.vocab ? slide.vocab.map(v => `<li><strong>${v.en}</strong> : ${v.fr}</li>`).join('') : '<li>...</li>'}
                </ul>
            </div>
        </div>
        
        <div class="timing-badge">
            ⏱️ Timing estimé : ${slide.timing || "N/A"}
        </div>
    `;

    // Toggle Views
    document.getElementById('menu-view').classList.add('hidden');
    document.getElementById('slide-view').classList.remove('hidden');

    // Smooth Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showMenu() {
    document.getElementById('slide-view').classList.add('hidden');
    document.getElementById('menu-view').classList.remove('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
