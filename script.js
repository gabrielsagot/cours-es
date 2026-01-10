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
                "8. Assessment & Challenges",
                "9. Next Steps",
                "10. Conclusion"
            ],
            visuals: "• Icônes simples (🎯 Mission, 👥 Audience, 📅 Planning, etc.)<br>• Design épuré, liste verticale claire<br>• Numéro de slide '2/12' discret en bas"
        },
        speech: {
            gabriel: "- Here is the outline of our presentation<br>- First, we will introduce the project context and explain who we are working with<br>- Then, we will detail our mission and the target audience",
            orian: "- We will show you our planning and how we organized our work with Trello<br>- After that, we will present our pedagogical approach and the tools we chose<br>- Finally, we will share the results of our first session, the challenges we faced, and our next steps"
        },
        summary: "<strong>Gabriel :</strong> Voici le plan de notre présentation. D'abord, nous introduirons le contexte du projet et expliquerons avec qui nous travaillons. Ensuite, nous détaillerons notre mission et le public cible.<br><br><strong>Orian :</strong> Nous vous montrerons notre planning et comment nous avons organisé notre travail avec Trello. Après cela, nous présenterons notre démarche pédagogique et les outils que nous avons choisis. Finalement, nous partagerons les résultats de notre première session, les défis rencontrés, et nos prochaines étapes.",
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
            subtitle: "What we accomplished with the first group",
            content: [
                "<strong>Session Details:</strong><br>• Date: [Date]<br>• Duration: 1 hour<br>• Students: 16 (half class)<br>• Location: Lycée Jean Macé",
                "<strong>Topics Covered:</strong><br>• Intro to demographic concepts<br>• Birth/Death rates & Population models<br>• Analysis of France's population pyramid",
                "<strong>Activities Completed ✅:</strong><br>• Interactive Q&A<br>• Comparison exercise (France vs others)<br>• Group discussions on trends",
                "<strong>Student Engagement:</strong><br>• Active participation & Relevant questions<br>• Good understanding of concepts<br>• Positive feedback"
            ],
            visuals: "• <strong>Preuves concrètes :</strong> Photos de la session, Pyramide étudiée, Feuille d'exercice complétée par un élève, Citation élève/prof"
        },
        speech: {
            gabriel: "- Let me show you what we accomplished during our first teaching session<br>- This session took place [date] with sixteen students and lasted one hour<br>- We covered fundamental demographic concepts, starting with the definition of a population model<br>- We introduced key indicators such as birth rates and death rates, and we began working with population pyramids",
            orian: "- During this session, students analyzed France's population pyramid and compared it with pyramids from other countries<br>- We organized group discussions about current demographic trends<br>- The engagement was very positive: students actively participated, asked many relevant questions, and showed good understanding of the basic concepts<br>- The feedback we received from both students and their teacher was encouraging<br>- This first session validated our pedagogical approach and gave us valuable insights for improving the upcoming sessions"
        },
        summary: "<strong>Gabriel :</strong> Voici ce que nous avons accompli lors de la première session (1h, 16 élèves). Concepts fondamentaux couverts : modèles de population, taux natalité/mortalité, pyramides des âges.<br><br><strong>Orian :</strong> Analyse de la pyramide de la France et comparaisons. Discussions de groupe. Engagement très positif (questions pertinentes, bonne compréhension). Retours encourageants des élèves/profs. Cette session a validé notre approche et donné des pistes d'amélioration.",
        vocab: [
            { en: "Let me show you", fr: "Laissez-moi vous montrer" },
            { en: "What we accomplished", fr: "Ce que nous avons accompli" },
            { en: "We covered", fr: "Nous avons couvert" },
            { en: "Birth/Death rates", fr: "Taux de natalité/mortalité" },
            { en: "Key indicators", fr: "Indicateurs clés" },
            { en: "Comparison exercise", fr: "Exercice de comparaison" },
            { en: "Demographic trends", fr: "Tendances démographiques" },
            { en: "Student engagement", fr: "Engagement des élèves" },
            { en: "Active participation", fr: "Participation active" },
            { en: "Relevant questions", fr: "Questions pertinentes" },
            { en: "Positive feedback", fr: "Retours positifs" },
            { en: "Valuable insights", fr: "Enseignements précieux" },
            { en: "Validated our approach", fr: "A validé notre approche" }
        ],
        timing: "1 min 15 - 1 min 30"
    },
    {
        id: 10,
        title: "WHAT WORKS / CHALLENGES",
        canva: {
            title: "What Works & Challenges",
            subtitle: "Technical assessment and lessons learned",
            content: [
                "<strong>✅ What Works Well:</strong><br>• <strong>Technical:</strong> Visual approach, Real data (Python visuals clear)<br>• <strong>Pedagogical:</strong> Progressive introduction, Small group interaction<br>• <strong>Organization:</strong> Communication with Lycée, Trello tracking",
                "<strong>⚠️ Challenges Encountered:</strong><br>• <strong>Technical:</strong> Heterogeneous levels, Time limits<br>• <strong>Logistical:</strong> Schedules coordination, Transportation<br>• <strong>Pedagogical:</strong> Balancing simplification/rigor",
                "<strong>💡 Solutions Implemented:</strong><br>• Differentiated activities<br>• More visuals, less text"
            ],
            visuals: "• Deux colonnes (Vert vs Orange)<br>• Icônes ✅ et ⚠️<br>• Graphique évolution (optionnel)"
        },
        speech: {
            gabriel: "- After our first session, we conducted a thorough assessment of what works and what challenges we face<br>- On the positive side, our visual approach using Python and real data is very effective<br>- Students quickly understood how to read population pyramids and showed genuine interest in real-world demographic trends<br>- The small group format facilitated interaction, and group activities promoted collaboration<br>- Our communication with Lycée Jean Macé has been excellent, and Trello helps us stay organized",
            orian: "- However, we have also encountered several challenges<br>- The main technical challenge is the heterogeneous level of students, which requires constant adaptation of our content<br>- Some students struggle with statistical interpretation, and the one-hour format limits how deeply we can explore each concept<br>- Logistically, coordinating schedules between the university and the high school is complex, and transportation to Niort takes time<br>- To address these challenges, we have created differentiated activities for different skill levels and increased our use of visual supports while reducing text-heavy content<br>- These adjustments will be implemented in the remaining sessions"
        },
        summary: "<strong>Gabriel :</strong> Évaluation post-session 1. Positif : Approche visuelle (Python/Data) efficace. Intérêt réel des élèves. Petits groupes favorisent l'interaction. Bonne communication/organisation (Trello).<br><br><strong>Orian :</strong> Défis : Niveau hétérogène (adaptation nécessaire). Difficultés statistiques chez certains. Format 1h court. Logistique (Transport/Emploi du temps). Solutions : Activités différenciées, plus de visuels, ajustements pour les prochaines sessions.",
        vocab: [
            { en: "Thorough assessment", fr: "Évaluation approfondie" },
            { en: "Genuine interest", fr: "Intérêt réel" },
            { en: "Promoted collaboration", fr: "A favorisé la collaboration" },
            { en: "Heterogeneous level", fr: "Niveau hétérogène" },
            { en: "Constant adaptation", fr: "Adaptation constante" },
            { en: "Logistically", fr: "Logistiquement" },
            { en: "Coordinating schedules", fr: "Coordonner les emplois du temps" },
            { en: "To address these challenges", fr: "Pour relever ces défis" },
            { en: "Differentiated activities", fr: "Activités différenciées" }
        ],
        timing: "1 min 30 - 1 min 45"
    },
    {
        id: 11,
        title: "NEXT STEPS",
        canva: {
            title: "Next Steps",
            subtitle: "What remains to be done",
            content: [
                "<strong>Immediate (Jan 2026):</strong><br>• Session 2 (Small Group) 📋<br><em>Improvements based on feedback</em>",
                "<strong>Short-Term (Late Jan/Feb):</strong><br>• Sessions 3 & 4 (Full Class) 📋<br><em>Challenge: Managing engagement</em>",
                "<strong>Final Step (Feb 2026):</strong><br>• IUT Discovery Day 🎓<br><em>Campus tour, Career paths, Final teaching</em>",
                "<strong>Post-Project:</strong><br>• Final evaluation, Feedback, Report"
            ],
            visuals: "• Timeline (Jan-Feb)<br>• Icônes calendrier<br>• Photo Campus IUT Poitiers<br>• Checklist progression"
        },
        speech: {
            gabriel: "- Looking ahead, we have three major teaching sessions remaining<br>- Our immediate next step is Session 2 with the second group of sixteen students<br>- We will cover the same fundamental topics as in Session 1, but with the improvements we identified after our first experience<br>- Then, in late January or early February, we will conduct two sessions with the entire class of thirty-two students<br>- This will be more challenging as we need to manage a larger group while maintaining high engagement levels",
            orian: "- The final and most exciting step will be welcoming all students to IUT Poitiers for a two-hour session in February<br>- This visit serves multiple purposes: we will finalize the teaching of demographic models, but we will also give students a tour of our campus and facilities<br>- We want to show them what studying Data Science looks like and present potential career paths in this field<br>- After the project concludes, we will collect comprehensive feedback from students and teachers, complete our final report, and reflect on the professional skills we have developed throughout this experience<br>- We are confident that each remaining session will benefit from the lessons we learned in Session 1"
        },
        summary: "<strong>Gabriel :</strong> Suite du projet. Immédiat : Session 2 (2ème groupe) avec améliorations. Court terme : Sessions 3 & 4 (Classe entière), défi de gestion de groupe.<br><br><strong>Orian :</strong> Étape finale : Visite IUT (2h, Février). Finalisation cours + Visite campus + Orientation. Post-projet : Retours, Rapport final, Réflexion compétences. Confiance grâce aux acquis de la session 1.",
        vocab: [
            { en: "Looking ahead", fr: "En regardant vers l'avenir" },
            { en: "Immediate next step", fr: "Prochaine étape immédiate" },
            { en: "To cover topics", fr: "Couvrir des sujets" },
            { en: "Improvements identified", fr: "Améliorations identifiées" },
            { en: "Challenging", fr: "Difficile / Challengeant" },
            { en: "Maintaining engagement", fr: "Maintenir l'engagement" },
            { en: "Welcoming", fr: "Accueillir" },
            { en: "Serves multiple purposes", fr: "Sert plusieurs objectifs" },
            { en: "Campus tour", fr: "Visite du campus" },
            { en: "Career paths", fr: "Parcours de carrière" },
            { en: "Comprehensive feedback", fr: "Retours complets" },
            { en: "To reflect on", fr: "Réfléchir sur" },
            { en: "Lessons learned", fr: "Leçons apprises" }
        ],
        timing: "1 min 15 - 1 min 30"
    },
    {
        id: 12,
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
    },
];

// Navigation Logic
function showSlide(id) {
    const slide = slidesData.find(s => s.id === id);
    if (!slide) return;

    // Build Content dynamically
    const contentContainer = document.getElementById('slide-content');
    contentContainer.innerHTML = `
        <div class="slide-header">
            <span class="slide-number-badge">${slide.id}</span>
            <h2>${slide.title}</h2>
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
