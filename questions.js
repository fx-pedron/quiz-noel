// [question, [choix], index de la bonne réponse, explication]
const QUIZ = {
1: [
 ["« Avoir le seum » : de quelle langue vient le mot « seum » ?",["De l'arabe","Du romani","Du créole","Du verlan"],0,"De l'arabe « semm », le venin. Avoir le seum, c'est avoir du poison en soi : être dégoûté, frustré."],
 ["Dans Kaamelott, quel personnage répond « C'est pas faux » quand il ne comprend pas un mot ?",["Perceval","Merlin","Léodagan","Karadoc"],0,"Perceval. À force, la réplique est devenue une expression courante."],
 ["Que veut dire le sigle Cerfa, en haut des formulaires administratifs ?",["Centre d'enregistrement et de révision des formulaires administratifs","Comité d'étude des règlements fiscaux et administratifs","Certificat d'enregistrement réglementaire des fichiers administratifs","Cellule d'examen des requêtes et formalités administratives"],0,"Un organisme dont la mission est de créer des formulaires. Difficile de faire plus français."],
 ["Sur le drapeau breton, le Gwenn ha Du, combien y a-t-il de bandes noires ?",["4","5","3","9"],1,"5, pour les cinq anciens évêchés de Haute-Bretagne. Les 4 bandes blanches représentent ceux de Basse-Bretagne. Le drapeau date de 1923."],
 ["Qui a organisé la première projection de cinéma payante, à Paris, en décembre 1895 ?",["Les frères Lumière","Les frères Pathé","Georges Méliès","Thomas Edison"],0,"Les frères Lumière, le 28 décembre 1895, au Salon indien du Grand Café, boulevard des Capucines."]
],
2: [
 ["Que veut dire « chanmé » ?",["Bizarre","Génial","Énervé","Fatigué"],1,"C'est le verlan de « méchant », dans le sens de génial, impressionnant."],
 ["Dans Les Bronzés font du ski, qui dit « Sur un malentendu, ça peut marcher » ?",["Bernard","Jean-Claude Dusse","Jérôme","Popeye"],1,"Jean-Claude Dusse, joué par Michel Blanc, l'éternel malchanceux en amour."],
 ["En quelle année les Françaises obtiennent-elles le droit de vote ?",["1936","1944","1919","1958"],1,"Par une ordonnance de 1944. Elles votent pour la première fois aux municipales d'avril 1945."],
 ["Que veut dire « kouign-amann » en breton ?",["Gâteau de la mer","Pain du dimanche","Beurre salé","Gâteau au beurre"],3,"Gâteau au beurre, tout simplement. Une spécialité née à Douarnenez au XIXe siècle. Le nom ne ment pas."],
 ["Combien Paris compte-t-il d'arrondissements ?",["16","20","12","24"],1,"20, numérotés en spirale, comme un escargot, à partir du centre."]
],
3: [
 ["Dans le jargon des architectes et des designers, que veut dire « être charrette » ?",["Être en réunion","Être licencié","Être en vacances","Être en retard et débordé"],3,"Au XIXe siècle, une charrette passait ramasser les projets des élèves des Beaux-Arts. Les retardataires finissaient leur travail dedans."],
 ["Dans Le Dîner de cons, comment s'appelle le personnage joué par Jacques Villeret ?",["Juste Leblanc","Lucien Cheval","François Pignon","Pierre Brochant"],2,"François Pignon. Francis Veber a donné ce nom à son héros naïf dans plusieurs de ses films."],
 ["Depuis quelle année la France vit-elle sous la Ve République ?",["1962","1945","1958","1968"],2,"1958, avec la Constitution voulue par le général de Gaulle."],
 ["Quel produit est célébré chaque automne à Redon lors de la Foire Teillouse ?",["Le sarrasin","Le cidre","La châtaigne","La pomme"],2,"La châtaigne. La foire a lieu en même temps que la Bogue d'or, un festival de chant traditionnel gallo."],
 ["Combien de fois l'équipe de France a-t-elle gagné la Coupe du monde de football masculine ?",["1","4","2","3"],2,"Deux fois : en 1998 à domicile, et en 2018 en Russie."]
],
4: [
 ["Que veut dire « chercher la petite bête » ?",["Faire le ménage","Avoir peur pour rien","Chercher le moindre défaut","Chercher un animal perdu"],2,"Chercher le petit défaut, le détail qui cloche, quitte à pinailler."],
 ["Dans Astérix, quel personnage est ligoté pendant le banquet final ?",["Assurancetourix","Agecanonix","Abraracourcix","Cétautomatix"],0,"Assurancetourix, le barde, pour l'empêcher de chanter."],
 ["En quelle année la peine de mort a-t-elle été abolie en France ?",["1968","1945","1981","1995"],2,"En 1981, porté par le garde des Sceaux Robert Badinter."],
 ["Dans quelle région mange-t-on du potjevleesch ?",["En Savoie","Dans le Nord","En Auvergne","En Alsace"],1,"Dans le Nord (Flandre) : plusieurs viandes blanches en gelée, servies froides, souvent avec des frites."],
 ["Contre quelle maladie Louis Pasteur a-t-il mis au point un vaccin en 1885 ?",["La rage","La tuberculose","La variole","La peste"],0,"La rage. Il l'a testé sur un petit garçon mordu par un chien, Joseph Meister, qui a survécu."]
],
5: [
 ["Que veut dire « faire chou blanc » ?",["Échouer","Cuisiner","Avoir peur","Mentir"],0,"Échouer, ne rien obtenir. L'expression viendrait du jeu de quilles, où un « coup blanc » ne fait tomber aucune quille."],
 ["Dans Les Visiteurs, quel acteur joue Jacquouille la Fripouille ?",["Thierry Lhermitte","Jean Reno","Christian Clavier","Gérard Jugnot"],2,"Christian Clavier. Jean Reno joue Godefroy de Montmirail."],
 ["Quel slogan est resté célèbre de Mai 68 ?",["Travailler plus pour gagner plus","Sous les pavés, la plage","Le changement, c'est maintenant","Liberté, égalité, fraternité"],1,"« Sous les pavés, la plage », peint sur les murs du Quartier latin."],
 ["Qui les Marseillais appellent-ils « la Bonne Mère » ?",["La mer Méditerranée","La mairie","Le Vieux-Port","Notre-Dame-de-la-Garde"],3,"Notre-Dame-de-la-Garde, la basilique qui veille sur la ville du haut de sa colline."],
 ["Quel âge avait Louis Braille quand il a inventé son système d'écriture pour les aveugles ?",["25 ans","40 ans","60 ans","15 ans"],3,"Environ 15 ans. Devenu aveugle à 3 ans, il a mis au point son alphabet de points en relief alors qu'il était encore élève."]
],
6: [
 ["Pour la Saint-Nicolas, qui accompagne le saint et punit les enfants pas sages ?",["Le Croque-mitaine","Krampus","La Befana","Le Père Fouettard"],3,"Le Père Fouettard. Son cousin autrichien et bavarois, c'est Krampus."],
 ["En Alsace, comment s'appelle la brioche en forme de bonhomme qu'on mange à la Saint-Nicolas ?",["Le bretzel","Le bredele","Le kougelhopf","Le mannele"],3,"Le mannele (ou manala), « petit bonhomme » en alsacien."],
 ["De quelle langue vient le verbe « kiffer » ?",["Du verlan","Du wolof","De l'arabe","De l'anglais"],2,"De l'arabe « kif », le bien-être, le plaisir."],
 ["Pour quel film Omar Sy a-t-il reçu le César du meilleur acteur ?",["Samba","Chocolat","Lupin","Intouchables"],3,"Intouchables, en 2012. C'était la première fois qu'un acteur noir remportait ce César."],
 ["Dans quelle ville La Marseillaise a-t-elle été composée ?",["Strasbourg","Paris","Marseille","Lyon"],0,"À Strasbourg, en 1792, sous le nom de « Chant de guerre pour l'armée du Rhin ». Elle doit son nom aux volontaires marseillais qui la chantaient en montant à Paris."]
],
7: [
 ["En Colombie, que fait-on le soir du 7 décembre ?",["On décore le sapin","On mange des buñuelos à minuit","On tire des feux d'artifice sur la mer","On allume des bougies devant les maisons"],3,"C'est le Día de las Velitas, la veille de l'Immaculée Conception. Le même jour, Lyon célèbre sa Fête des Lumières, pour la même fête religieuse."],
 ["De quelle langue vient le mot « toubib » ?",["Du latin","Du turc","De l'hébreu","De l'arabe"],3,"De l'arabe « tbib », le médecin. Il est arrivé en français par l'argot militaire."],
 ["Dans quel café travaille Amélie Poulain ?",["Les Deux Moulins","Le Café de Flore","Les Deux Magots","Le Procope"],0,"Les Deux Moulins, rue Lepic, à Montmartre. Il existe vraiment."],
 ["Pourquoi le coq est-il un symbole de la France ?",["À cause d'un jeu de mots latin","Parce que c'était l'animal de Clovis","Parce que Napoléon l'adorait","À cause d'une victoire militaire"],0,"En latin, « gallus » veut dire à la fois coq et Gaulois."],
 ["Quel symbole figure sur le drapeau corse ?",["Un lion","Une croix","Un aigle","Une tête de Maure"],3,"Une tête de Maure, coiffée d'un bandeau blanc. Pascal Paoli l'a adoptée en 1762."]
],
8: [
 ["Que veut dire « ouf » ?",["Fou","Ouvert","Fatigué","Énorme"],0,"C'est le verlan de « fou ». Un truc de ouf, c'est un truc incroyable."],
 ["Qui a créé le personnage d'Arsène Lupin ?",["Alexandre Dumas","Jules Verne","Maurice Leblanc","Gaston Leroux"],2,"Maurice Leblanc. Sa maison d'Étretat, en Normandie, est devenue un musée. Omar Sy a remis le personnage à la mode dans la série Lupin."],
 ["Qui a créé le baccalauréat, en 1808 ?",["Napoléon","Jules Ferry","Louis XIV","De Gaulle"],0,"Napoléon. Le premier bac était surtout un examen oral."],
 ["Quel piment fait sécher sur les façades de son village, au Pays basque ?",["Le piment oiseau","Le piment d'Espelette","Le piquillo","Le piment de Cayenne"],1,"Le piment d'Espelette. À la fin de l'été, les cordes de piments rouges décorent les façades."],
 ["En 1783, qui fait voler le premier ballon à air chaud ?",["Les frères Wright","Les frères Michelin","Les frères Lumière","Les frères Montgolfier"],3,"Les frères Montgolfier, à Annonay, en Ardèche. D'où le nom de montgolfière."]
],
9: [
 ["Quelle loi a été promulguée le 9 décembre 1905 ?",["Le droit de vote des femmes","La séparation des Églises et de l'État","Le repos du dimanche","L'école gratuite et obligatoire"],1,"La séparation des Églises et de l'État, socle de la laïcité. Le 9 décembre est d'ailleurs la Journée nationale de la laïcité."],
 ["Le verbe « baragouiner » viendrait de deux mots bretons. Lesquels ?",["Oui et non","Mer et vent","Homme et femme","Pain et vin"],3,"« Bara » (pain) et « gwin » (vin) : les mots que les Bretons auraient sans cesse demandés, dans une langue que personne ne comprenait."],
 ["Dans la série Dix pour cent, comment s'appelle le chien de l'agence ?",["Jean Gabin","Bourvil","Belmondo","Delon"],0,"Jean Gabin, comme le monstre sacré du cinéma français."],
 ["Avec quel fromage fait-on la tartiflette ?",["Le reblochon","La raclette","Le comté","Le beaufort"],0,"Le reblochon. Et la recette n'est pas si ancienne : elle a été popularisée dans les années 1980 par les producteurs de reblochon."],
 ["Sur le Tour de France, que récompense le maillot à pois ?",["Le meilleur jeune","Le plus combatif","Le meilleur grimpeur","Le meilleur sprinteur"],2,"Le meilleur grimpeur. Le maillot vert va au meilleur sprinteur, le blanc au meilleur jeune."]
],
10: [
 ["En argot, qui est le « daron » ?",["Le patron","Le frère","Le policier","Le père"],3,"Le père (et la daronne, la mère). Le mot existe en argot depuis plusieurs siècles."],
 ["Dans quelle ville est née Aya Nakamura ?",["Abidjan","Paris","Dakar","Bamako"],3,"À Bamako, au Mali, avant de grandir à Aulnay-sous-Bois. Elle est l'une des chanteuses francophones les plus écoutées au monde."],
 ["En quelle année les pièces et billets en euros remplacent-ils le franc ?",["1999","2002","2005","2000"],1,"Le 1er janvier 2002. L'euro existait déjà depuis 1999, mais seulement pour les banques et les marchés."],
 ["Quelle ville se proclame capitale mondiale du cassoulet ?",["Toulouse","Albi","Castelnaudary","Carcassonne"],2,"Castelnaudary, mais Toulouse et Carcassonne revendiquent aussi leur version. La querelle dure depuis longtemps."],
 ["Quel Français a inventé la carte à puce, en 1974 ?",["Jacques Cousteau","Roland Moreno","Louis Renault","Marcel Dassault"],1,"Roland Moreno. Elle équipe aujourd'hui nos cartes bancaires et nos cartes Vitale."]
],
11: [
 ["Que veut dire « chelou » ?",["Joli","Cher","Lent","Louche"],3,"C'est le verlan de « louche » : bizarre, pas net."],
 ["Quel duo français a fait toute sa carrière caché sous des casques de robot ?",["Cassius","Daft Punk","Air","Justice"],1,"Daft Punk. Le duo s'est séparé en 2021, avec une vidéo d'adieu intitulée « Epilogue »."],
 ["Qui a été la première femme Première ministre en France ?",["Simone Veil","Édith Cresson","Élisabeth Borne","Ségolène Royal"],1,"Édith Cresson, en 1991. Il a fallu attendre 2022 pour la deuxième, Élisabeth Borne."],
 ["De quelle ville le canelé est-il la spécialité ?",["Toulouse","Lyon","Bordeaux","Nantes"],2,"Bordeaux. On dit qu'il serait né grâce aux jaunes d'œufs laissés par les viticulteurs, qui utilisaient les blancs pour clarifier le vin."],
 ["Sur quelle surface se joue le tournoi de Roland-Garros ?",["Dur","Terre battue","Moquette","Gazon"],1,"Sur terre battue. C'est le seul tournoi du Grand Chelem sur cette surface."]
],
12: [
 ["Au Québec, qui est ta « blonde » ?",["Ta voisine","Ta sœur","Ta bière","Ta petite amie"],3,"Ta petite amie, quelle que soit sa couleur de cheveux. Et ton « chum », c'est ton copain."],
 ["Dans quelle ville est né Joe Dassin, l'interprète des « Champs-Élysées » ?",["Bruxelles","New York","Montréal","Paris"],1,"À New York, en 1938. Son père était le réalisateur américain Jules Dassin."],
 ["Qui a porté la loi de 1975 qui légalise l'IVG ?",["Gisèle Halimi","Françoise Giroud","Simone Veil","Simone de Beauvoir"],2,"Simone Veil, alors ministre de la Santé, au terme de débats très violents à l'Assemblée."],
 ["À Lyon, qu'est-ce qu'un « bouchon » ?",["Une spécialité de charcuterie","Un petit verre de vin","Un embouteillage","Un restaurant traditionnel"],3,"Un restaurant traditionnel lyonnais, où l'on mange tablier de sapeur, quenelles et saucisson brioché."],
 ["Quel est le vrai nom de Molière ?",["Jean-Baptiste Poquelin","François-Marie Arouet","Jean de La Fontaine","Pierre Corneille"],0,"Jean-Baptiste Poquelin. François-Marie Arouet, c'est Voltaire."]
],
13: [
 ["Comment dit-on 90 en Belgique et en Suisse ?",["Neufante","Quatre-vingt-dix","Nonante","Novante"],2,"Nonante. Et 70 se dit septante."],
 ["Pour quel pays Céline Dion a-t-elle gagné l'Eurovision en 1988 ?",["La Belgique","La France","La Suisse","Le Canada"],2,"Pour la Suisse, avec « Ne partez pas sans moi ». Le Canada ne participe pas à l'Eurovision."],
 ["Quelle est la première femme entrée au Panthéon pour ses propres mérites ?",["George Sand","Simone Veil","Marie Curie","Joséphine Baker"],2,"Marie Curie, en 1995, aux côtés de son mari Pierre."],
 ["Quelle ville est surnommée « la Ville rose » ?",["Montpellier","Nice","Albi","Toulouse"],3,"Toulouse, pour la couleur de ses briques en terre cuite."],
 ["Chez Proust, dans quoi le narrateur trempe-t-il sa célèbre madeleine ?",["Du café","Du chocolat chaud","Du lait","Du thé"],3,"Dans du thé (une infusion, en fait). Dans les premiers brouillons, ce n'était même pas une madeleine, mais du pain grillé."]
],
14: [
 ["Dans certains cantons suisses, comme le Vaud, comment dit-on 80 ?",["Huitante","Octante","Quatre-vingts","Octuple"],0,"Huitante, utilisé notamment dans le Vaud, le Valais et à Fribourg."],
 ["Quelle est la dernière chanson française à avoir gagné l'Eurovision ?",["« L'Oiseau et l'Enfant », Marie Myriam","« Mon cœur résiste encore », Lisa Angell","« Tom Pillibi », Jacqueline Boyer","« Voilà », Barbara Pravi"],0,"« L'Oiseau et l'Enfant », de Marie Myriam, en 1977. Barbara Pravi est arrivée deuxième en 2021."],
 ["Qui est entrée au Panthéon en 2021, première femme noire à y reposer ?",["Joséphine Baker","Maryse Condé","Christiane Taubira","Gisèle Halimi"],0,"Joséphine Baker, artiste, résistante et militante contre le racisme."],
 ["Dans quelle région se trouve le Mont-Saint-Michel ?",["En Pays de la Loire","En Bretagne","En Normandie","À cheval sur les deux"],2,"En Normandie, ce qui agace toujours les Bretons. Le dicton dit que le Couesnon, dans sa folie, a mis le Mont en Normandie."],
 ["Quel écrivain colombien a vécu fauché dans une chambre de bonne du Quartier latin, dans les années 1950 ?",["Álvaro Mutis","Fernando Vallejo","Gabriel García Márquez","Jorge Isaacs"],2,"Gabriel García Márquez. Il logeait rue Cujas et y a écrit « Pas de lettre pour le colonel »."]
],
15: [
 ["Dans quelle partie de la France dit-on « chocolatine » plutôt que « pain au chocolat » ?",["Le Sud-Ouest","L'Est","Le Nord","La Bretagne"],0,"Le Sud-Ouest, autour de Toulouse et Bordeaux. Le débat est sans fin."],
 ["Dans Les Aventures de Rabbi Jacob, de quelle couleur est le chewing-gum dans lequel tombe Louis de Funès ?",["Blanc","Rose","Vert","Bleu"],2,"Vert. Une scène culte tournée dans une vraie cuve géante."],
 ["À qui attribue-t-on la phrase « Paris vaut bien une messe » ?",["Napoléon","Louis XIV","François Ier","Henri IV"],3,"À Henri IV, protestant, qui s'est converti au catholicisme pour devenir roi de France."],
 ["Quel jour sort le beaujolais nouveau ?",["Le 11 novembre","Le 1er novembre","Le dernier vendredi de novembre","Le troisième jeudi de novembre"],3,"Le troisième jeudi de novembre, à minuit pile."],
 ["Quel record de vitesse un TGV a-t-il établi en 2007 ?",["Environ 675 km/h","Environ 475 km/h","Environ 575 km/h","Environ 380 km/h"],2,"574,8 km/h, le record du monde de vitesse sur rail pour un train classique."]
],
16: [
 ["Selon une légende tenace, d'où viendrait le mot « bistro » ?",["Du mot « bis »","De l'italien","D'un patron de café nommé Bistrot","De cosaques russes pressés"],3,"Les cosaques, à Paris en 1814, auraient crié « bystro » (vite, en russe). C'est très probablement faux, car le mot n'apparaît que bien plus tard. Mais l'histoire est trop belle."],
 ["Quel film a longtemps détenu le record d'entrées pour un film français en France ?",["La Grande Vadrouille","Astérix et Obélix : Mission Cléopâtre","Le Corniaud","Les Visiteurs"],0,"La Grande Vadrouille (1966), avec Bourvil et de Funès, jusqu'à Bienvenue chez les Ch'tis en 2008."],
 ["Combien de temps a duré le règne de Louis XIV ?",["72 ans","82 ans","32 ans","52 ans"],0,"72 ans, de 1643 à 1715. Il est devenu roi à 4 ans."],
 ["Quel est le plus long fleuve de France ?",["Le Rhône","La Seine","La Garonne","La Loire"],3,"La Loire, environ 1 000 km, entièrement en France."],
 ["Avec quel pays la France a-t-elle construit le Concorde ?",["L'Allemagne","L'Italie","Le Royaume-Uni","Les États-Unis"],2,"Le Royaume-Uni. L'avion a volé pour la première fois en 1969, à Toulouse, et a été retiré du service en 2003."]
],
17: [
 ["Que veut dire « avoir un poil dans la main » ?",["Être radin","Être paresseux","Être maladroit","Être chanceux"],1,"Être paresseux. À force de ne jamais rien faire de ses mains, un poil finirait par y pousser."],
 ["Dans Fort Boyard, qui pose les énigmes du haut de sa tour ?",["Le Père Fouras","Passe-Partout","Monsieur Loyal","La Boule"],0,"Le Père Fouras, avec ses énigmes en vers."],
 ["Dans quelle ville est né Napoléon Bonaparte ?",["Nice","Bastia","Ajaccio","Marseille"],2,"À Ajaccio, en 1769, juste un an après le rattachement de la Corse à la France."],
 ["Qui était Dom Pérignon ?",["Un roi","Un chimiste","Un moine","Un vigneron américain"],2,"Un moine bénédictin de l'abbaye d'Hautvillers. On lui attribue à tort l'invention du champagne, mais il a beaucoup fait progresser son élaboration."],
 ["Lors de la finale de la Coupe du monde 2006, qui reçoit le coup de tête de Zidane ?",["Gianluigi Buffon","Fabio Cannavaro","Marco Materazzi","Andrea Pirlo"],2,"Marco Materazzi. Zidane est expulsé, et l'Italie gagne aux tirs au but."]
],
18: [
 ["Que veut dire « être à l'ouest » ?",["Être en vacances","Être distrait, déconnecté","Être en retard","Être très sûr de soi"],1,"Être distrait, dans la lune, pas tout à fait là."],
 ["Dans quelle ville se passe la série Plus belle la vie ?",["Marseille","Nice","Toulon","Montpellier"],0,"À Marseille, dans le quartier imaginaire du Mistral."],
 ["Où Vercingétorix a-t-il été vaincu par Jules César, en 52 avant J.-C. ?",["Lutèce","Alésia","Bibracte","Gergovie"],1,"À Alésia. À Gergovie, quelques mois plus tôt, c'est lui qui avait battu César."],
 ["Le calvados est une eau-de-vie de quoi ?",["De prune","De poire","De vin","De cidre"],3,"De cidre, donc de pommes, distillé puis vieilli en fût."],
 ["Dans quelle ville est née la pétanque, en 1907 ?",["Nice","La Ciotat","Avignon","Marseille"],1,"À La Ciotat. Un joueur souffrant de rhumatismes ne pouvait plus prendre d'élan : on a joué « pieds tanqués », les pieds joints."]
],
19: [
 ["Que veut dire « avoir la dalle » ?",["Avoir de l'argent","Avoir faim","Avoir sommeil","Avoir de la chance"],1,"Avoir faim, très faim."],
 ["Qui a créé Le Petit Nicolas ?",["Jean-Jacques Sempé seul","Goscinny et Uderzo","Goscinny et Sempé","Hergé"],2,"René Goscinny pour le texte, Jean-Jacques Sempé pour les dessins. Goscinny a aussi créé Astérix avec Uderzo."],
 ["Combien de départements compte la France métropolitaine ?",["86","106","96","101"],2,"96. On arrive à 101 avec les cinq départements d'outre-mer."],
 ["Quel fromage est surnommé « le roi des fromages » ?",["Le brie","Le roquefort","Le camembert","Le comté"],0,"Le brie. Le titre lui aurait été décerné lors d'un concours au congrès de Vienne, en 1815."],
 ["Combien de médailles d'or individuelles Léon Marchand a-t-il gagnées aux JO de Paris 2024 ?",["4","5","3","2"],0,"Quatre : 200 m papillon, 200 m brasse, 200 m et 400 m quatre nages."]
],
20: [
 ["Que veut dire le mot « bobo » ?",["Bon et beau","Bobine","Bon boulot","Bourgeois-bohème"],3,"Bourgeois-bohème. Le mot vient de l'anglais « bourgeois bohemian », popularisé en 2000 par le journaliste américain David Brooks."],
 ["Quel est le vrai nom de Johnny Hallyday ?",["Johnny Duval","Jean-Jacques Hallier","Jean-Philippe Smet","Jean-Pierre Martin"],2,"Jean-Philippe Smet. Son père était belge."],
 ["Que représente Marianne ?",["La ville de Paris","La République","Une héroïne de la Révolution","Une reine de France"],1,"La République. Ses bustes ont pris les traits de Brigitte Bardot, Catherine Deneuve ou Laetitia Casta."],
 ["Que ne doit-on pas trouver dans une quiche lorraine traditionnelle ?",["Du fromage","Des lardons","Des œufs","De la crème"],0,"Du fromage ! La recette d'origine, c'est pâte, œufs, crème et lardons. Le gruyère est un ajout plus tardif."],
 ["À Paris, à quoi sert la statue du zouave du pont de l'Alma ?",["À marquer le kilomètre zéro","À mesurer les crues de la Seine","À honorer un roi","À indiquer le nord"],1,"À mesurer les crues. En 1910, l'eau lui est arrivée jusqu'aux épaules."]
],
21: [
 ["Pourquoi la coquille Saint-Jacques porte-t-elle ce nom ?",["À cause de sa forme de croix","À cause d'un pêcheur nommé Jacques","Parce qu'on la mangeait le jour de la Saint-Jacques","Parce que c'était l'emblème des pèlerins de Compostelle"],3,"Les pèlerins en route vers Saint-Jacques-de-Compostelle la portaient comme emblème."],
 ["Lors de la cérémonie d'ouverture des JO de Paris 2024, quel groupe de metal français a joué aux fenêtres de la Conciergerie ?",["Mass Hysteria","Gojira","Shaka Ponk","Trust"],1,"Gojira, avec « Ah ! ça ira », entouré de Marie-Antoinette décapitées. Une première pour un groupe de metal aux Jeux."],
 ["Le fameux « 49.3 », c'est quoi exactement ?",["Un décret de 1958","Un article de la Constitution","Le numéro d'une loi sur les retraites","Un article du Code électoral"],1,"L'article 49, alinéa 3 de la Constitution. Il permet au gouvernement de faire adopter un texte sans vote, sauf si une motion de censure le renverse."],
 ["Quel cépage alsacien porte un nom qui veut dire « épicé » en allemand ?",["Le pinot gris","Le riesling","Le gewurztraminer","Le sylvaner"],2,"Le gewurztraminer (« Gewürz », épice). Notes de litchi et de rose, parfait avec le munster."],
 ["Pour quel événement le métro de Paris a-t-il été inauguré, en 1900 ?",["Le centenaire de la Révolution","Le couronnement d'un roi","L'Exposition universelle","Les Jeux olympiques"],2,"L'Exposition universelle de 1900. Les Jeux olympiques de Paris ont aussi eu lieu cette année-là."]
],
22: [
 ["Que veut dire « prendre la poudre d'escampette » ?",["Se maquiller","S'enfuir","S'endormir","Se mettre en colère"],1,"S'enfuir, filer en douce."],
 ["Pour quelle chanteuse Serge Gainsbourg a-t-il écrit « La Javanaise », en 1963 ?",["Françoise Hardy","Juliette Gréco","Brigitte Bardot","Jane Birkin"],1,"Juliette Gréco. Le piège, c'est Birkin, que Gainsbourg n'a rencontrée qu'en 1968."],
 ["Qui a écrit la Déclaration des droits de la femme et de la citoyenne, en 1791 ?",["Olympe de Gouges","George Sand","Louise Michel","Madame Roland"],0,"Olympe de Gouges, guillotinée en 1793. Elle écrivait que si la femme a le droit de monter sur l'échafaud, elle doit avoir celui de monter à la tribune."],
 ["Quel aliment les supporters du Stade rennais célèbrent-ils dans leur chant « … je t'aime » ?",["La crêpe","Le far breton","La galette-saucisse","Le kouign-amann"],2,"La galette-saucisse : une saucisse grillée roulée dans une galette de blé noir, star des buvettes du stade."],
 ["Jusqu'en quelle année le Minitel a-t-il fonctionné en France ?",["2002","2020","1995","2012"],3,"Jusqu'en 2012. Lancé au début des années 1980, il a longtemps été la fierté du « web » à la française."]
],
23: [
 ["Lequel de ces mots français vient du nahuatl, la langue des Aztèques ?",["Vanille","Sucre","Chocolat","Café"],2,"Chocolat, de « xocolatl ». Tomate et avocat viennent aussi du nahuatl."],
 ["Dans La Cité de la peur, comment s'appelle la danse d'Odile Deray et Serge Karamazov ?",["La Lambada","La Macarena","La Carioca","Le Madison"],2,"La Carioca."],
 ["Dans Bienvenue chez les Ch'tis, dans quelle ville du Nord Philippe Abrams est-il muté ?",["Dunkerque","Roubaix","Lille","Bergues"],3,"Bergues. Le film a fait plus de 20 millions d'entrées en France."],
 ["La tapisserie de Bayeux n'en est pas vraiment une. Qu'est-ce que c'est ?",["Un vitrail","Une peinture","Une mosaïque","Une broderie"],3,"Une broderie de près de 70 mètres, qui raconte la conquête de l'Angleterre par Guillaume le Conquérant en 1066."],
 ["Quel est le numéro du département d'Ille-et-Vilaine ?",["56","22","29","35"],3,"35. Le 22, ce sont les Côtes-d'Armor, le 29 le Finistère et le 56 le Morbihan."]
],
24: [
 ["Comment dit-on « Joyeux Noël » en breton ?",["Trugarez","Kenavo","Bloavezh mat","Nedeleg laouen"],3,"Nedeleg laouen ! Les autres veulent dire bonne année, merci et au revoir."],
 ["Que représente la bûche de Noël ?",["Une crèche","Une cheminée","Un rouleau de parchemin","Un tronc d'arbre"],3,"La vraie bûche qu'on faisait brûler dans l'âtre pendant la veillée de Noël."],
 ["Quelle ville accueille le plus ancien marché de Noël de France ?",["Lille","Lyon","Colmar","Strasbourg"],3,"Strasbourg. Son Christkindelsmärik existe depuis 1570."],
 ["Que sont les santons de Provence ?",["Des biscuits","Des bougies","Des chants de Noël","Des figurines de crèche"],3,"Des figurines de crèche en argile. Le mot vient du provençal « santoun », petit saint."],
 ["Qui a composé la musique de « Minuit, chrétiens », en 1847 ?",["Georges Bizet","Hector Berlioz","Adolphe Adam","Camille Saint-Saëns"],2,"Adolphe Adam, aussi compositeur du ballet Giselle."],
 ["Dans quel pays a été créé le chant « Douce nuit », en 1818 ?",["En Angleterre","En Suisse","En Allemagne","En Autriche"],3,"En Autriche, à Oberndorf, près de Salzbourg."],
 ["En Colombie, combien de jours dure la Novena de Aguinaldos ?",["12","7","24","9"],3,"Neuf jours, du 16 au 24 décembre, avec prières, chants et buñuelos."],
 ["En Colombie, avec quel dessert mange-t-on les buñuelos à Noël ?",["La natilla","L'arequipe","La cocada","Le flan"],0,"La natilla, une sorte de crème ferme à la panela et à la cannelle."],
 ["Le Père Noël en rouge et blanc, une invention de Coca-Cola ?",["Non, il était déjà en rouge avant","Oui, en 1950","Oui, en 1931","Non, c'est une invention de Disney"],0,"Non. Il était déjà souvent en rouge avant, mais les publicités Coca-Cola dessinées à partir de 1931 ont fixé son image dans le monde entier."],
 ["Pour qui a été créé Rudolph, le renne au nez rouge, en 1939 ?",["Pour un grand magasin américain","Pour un livre de contes norvégien","Pour Coca-Cola","Pour Disney"],0,"Pour le grand magasin Montgomery Ward, qui distribuait une brochure aux enfants."],
 ["Dans quelle ville trouve-t-on l'une des plus anciennes mentions d'un sapin de Noël, en 1521 ?",["Munich","Sélestat","Riga","Strasbourg"],1,"Sélestat, en Alsace, dans un registre de comptes."],
 ["En France, traditionnellement, quand s'embrasse-t-on sous le gui ?",["À la Saint-Nicolas","Le soir de Noël","À l'Épiphanie","Le jour de l'An"],3,"Au Nouvel An, en se souhaitant la bonne année. Chez les Anglo-Saxons, c'est plutôt à Noël."],
 ["D'où vient le mot « réveillon » ?",["D'un plat ancien","Du verbe réveiller","D'un mot latin pour fête","D'une ville de Normandie"],1,"Du verbe réveiller : on veille tard pour faire un repas au milieu de la nuit."],
 ["Dans quel pays une chaîne de poulet frit américaine est-elle devenue une tradition de Noël ?",["Au Mexique","En Corée du Sud","Au Japon","Aux Philippines"],2,"Au Japon, depuis une campagne publicitaire de KFC en 1974. Il faut parfois réserver son seau des semaines à l'avance."],
 ["Dans quelle ville se trouve le secrétariat du Père Noël, qui répond aux lettres des enfants ?",["Strasbourg","Paris","Libourne","Rovaniemi"],2,"À Libourne, près de Bordeaux. En 1962, c'est la psychanalyste Françoise Dolto qui a rédigé la première réponse type."],
 ["Combien de fantômes rendent visite à Scrooge dans Un chant de Noël, de Dickens ?",["2","3","4","5"],2,"Quatre : Jacob Marley, puis les esprits des Noëls passés, du Noël présent et des Noëls à venir."],
 ["Dans Maman, j'ai raté l'avion, comment s'appelle le petit garçon oublié par sa famille ?",["Kevin","Tommy","Kyle","Danny"],0,"Kevin McCallister, joué par Macaulay Culkin."],
 ["Combien de rennes tirent le traîneau du Père Noël, Rudolph compris ?",["9","12","8","6"],0,"Neuf : les huit rennes de la tradition, plus Rudolph qui ouvre la marche avec son nez lumineux."],
 ["Que s'est-il passé à Noël 1914, sur le front ?",["Des soldats ennemis ont fraternisé","Une grande tempête de neige","La fin de la guerre a été annoncée","Une offensive surprise"],0,"Des trêves spontanées : chants, échanges de cigarettes, parfois un match de foot. Le film Joyeux Noël de Christian Carion (2005) le raconte."],
 ["Quelle ville est la capitale du marron glacé ?",["Grenoble","Lyon","Aubenas","Privas"],3,"Privas, en Ardèche."],
 ["Qu'est-ce qu'un chapon ?",["Un canard engraissé","Une jeune dinde","Un coq castré","Une pintade"],2,"Un coq castré et engraissé, à la chair très tendre. Un classique du repas de Noël."],
 ["D'où vient le nom « Santa Claus » ?",["De l'allemand","Du norvégien","Du néerlandais","Du latin"],2,"Du néerlandais « Sinterklaas », c'est-à-dire saint Nicolas, apporté à New York par les colons hollandais."],
 ["Quelle ville colombienne est célèbre pour ses illuminations de Noël, les alumbrados ?",["Cali","Cartagena","Bogotá","Medellín"],3,"Medellín, où des millions de lumières habillent la ville et les rives du fleuve chaque décembre."],
 ["Dans Le Père Noël est une ordure, quelle spécialité monsieur Preskovitch apporte-t-il ?",["Des loukoums","Des doubitchous","Des pirojki","Des baklavas"],1,"Des doubitchous de Sofia, « roulés à la main sous les aisselles ». Personne n'ose y goûter. Joyeux Noël !"]
]
};
