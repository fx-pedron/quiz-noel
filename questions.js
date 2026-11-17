// [question, [choix], index de la bonne réponse, explication]
const QUIZ = {
1: [
 ["« Avoir le seum » : de quelle langue vient le mot « seum » ?",["Du verlan","Du créole","Du romani","De l'arabe"],3,"De l'arabe « semm », le venin. Avoir le seum, c'est avoir du poison en soi : être dégoûté, frustré."],
 ["Dans Kaamelott, quel personnage répond « C'est pas faux » quand il ne comprend pas un mot ?",["Léodagan","Merlin","Perceval","Karadoc"],2,"Perceval. À force, la réplique est devenue une expression courante."],
 ["Que veut dire le sigle Cerfa, en haut des formulaires administratifs ?",["Comité d'étude des règlements fiscaux et administratifs","Certificat d'enregistrement réglementaire des fichiers administratifs","Cellule d'examen des requêtes et formalités administratives","Centre d'enregistrement et de révision des formulaires administratifs"],3,"Un organisme dont la mission est de créer des formulaires. Difficile de faire plus français."],
 ["Sur le drapeau breton, le Gwenn ha Du, combien y a-t-il de bandes noires ?",["5","4","9","3"],0,"5, pour les cinq anciens évêchés de Haute-Bretagne. Les 4 bandes blanches représentent ceux de Basse-Bretagne. Le drapeau date de 1923."],
 ["Qui a organisé la première projection de cinéma payante, à Paris, en décembre 1895 ?",["Georges Méliès","Les frères Lumière","Thomas Edison","Les frères Pathé"],1,"Les frères Lumière, le 28 décembre 1895, au Salon indien du Grand Café, boulevard des Capucines."]
],
2: [
 ["Quel artiste colombien est célèbre dans le monde entier pour ses personnages aux formes très rondes ?",["Fernando Botero","Gabriel García Márquez","Alejandro Obregón","Doris Salcedo"],0,"Fernando Botero, né à Medellín en 1932. Ses sculptures rondes trônent sur la plaza Botero de Medellín, et certaines ont même été exposées sur les Champs-Élysées en 1992."],
 ["En 2019, quel Colombien a remporté le Tour de France ?",["Fernando Gaviria","Nairo Quintana","Egan Bernal","Rigoberto Urán"],2,"Egan Bernal, à 22 ans. C'était le premier Latino-Américain à gagner le Tour."],
 ["Dans le film Disney Encanto, comment s'appelle la famille magique ?",["Los Montoya","Los Madrigal","Los Buendía","Los Restrepo"],1,"Les Madrigal. Les Buendía, c'est la famille de Cent ans de solitude, dont le film s'inspire."],
 ["Dans quelle ville est née Shakira ?",["Medellín","Bogotá","Barranquilla","Cali"],2,"À Barranquilla, sur la côte caraïbe, en 1977."],
 ["Quel oiseau figure sur les armoiries de la Colombie ?",["Le colibri","Le toucan","L'aigle harpie","Le condor des Andes"],3,"Le condor des Andes, symbole de liberté, qui tient une couronne de laurier."],
 ["Quelle particularité géographique la Colombie est-elle le seul pays d'Amérique du Sud à avoir ?",["Une frontière avec quatre pays","Des côtes sur le Pacifique et sur la mer des Caraïbes","Un désert","Un volcan actif"],1,"Elle est le seul pays d'Amérique du Sud bordé à la fois par l'océan Pacifique et par la mer des Caraïbes."],
 ["Quelle ville colombienne se proclame « capitale mondiale de la salsa » ?",["Medellín","Santa Marta","Cartagena","Cali"],3,"Cali, qui accueille chaque année le Festival mondial de la salsa."],
 ["Quelle rivière colombienne est surnommée « la rivière aux cinq couleurs » ?",["Le Magdalena","Le río Claro","Le Cauca","Caño Cristales"],3,"Caño Cristales, dans la sierra de la Macarena. Ses couleurs viennent d'une plante aquatique qui devient rouge vif au soleil."],
 ["Comment s'appelle la mule de Juan Valdez, le célèbre emblème du café colombien ?",["Conchita","Rosita","Lupita","Paquita"],0,"Conchita. Juan Valdez et sa mule représentent le café de Colombie depuis 1959."],
 ["Quel est le sport national colombien, où l'on lance un palet de métal sur de petites charges de poudre qui explosent ?",["Le tejo","Le bolo criollo","La rana","La chaza"],0,"Le tejo. Quand le palet touche une « mecha », ça détone. Il est officiellement sport national depuis 2000. ¡Feliz cumpleaños!"]
],
3: [
 ["Dans Les Bronzés font du ski, qui dit « Sur un malentendu, ça peut marcher » ?",["Popeye","Jérôme","Bernard","Jean-Claude Dusse"],3,"Jean-Claude Dusse, joué par Michel Blanc, l'éternel malchanceux en amour."],
 ["Dans Le Dîner de cons, comment s'appelle le personnage joué par Jacques Villeret ?",["Pierre Brochant","Juste Leblanc","Lucien Cheval","François Pignon"],3,"François Pignon. Francis Veber a donné ce nom à son héros naïf dans plusieurs de ses films."],
 ["Depuis quelle année la France vit-elle sous la Ve République ?",["1945","1962","1958","1968"],2,"1958, avec la Constitution voulue par le général de Gaulle."],
 ["Quel produit est célébré chaque automne à Redon lors de la Foire Teillouse ?",["La châtaigne","Le cidre","La pomme","Le sarrasin"],0,"La châtaigne. La foire a lieu en même temps que la Bogue d'or, un festival de chant traditionnel gallo."],
 ["Combien de fois l'équipe de France a-t-elle gagné la Coupe du monde de football masculine ?",["1","2","4","3"],1,"Deux fois : en 1998 à domicile, et en 2018 en Russie."]
],
4: [
 ["Que veut dire « chercher la petite bête » ?",["Chercher un animal perdu","Faire le ménage","Avoir peur pour rien","Chercher le moindre défaut"],3,"Chercher le petit défaut, le détail qui cloche, quitte à pinailler."],
 ["Dans Astérix, quel personnage est ligoté pendant le banquet final ?",["Agecanonix","Assurancetourix","Cétautomatix","Abraracourcix"],1,"Assurancetourix, le barde, pour l'empêcher de chanter."],
 ["En quelle année la peine de mort a-t-elle été abolie en France ?",["1968","1945","1995","1981"],3,"En 1981, porté par le garde des Sceaux Robert Badinter."],
 ["Dans quelle région mange-t-on du potjevleesch ?",["En Auvergne","En Alsace","Dans le Nord","En Savoie"],2,"Dans le Nord (Flandre) : plusieurs viandes blanches en gelée, servies froides, souvent avec des frites."],
 ["Contre quelle maladie Louis Pasteur a-t-il mis au point un vaccin en 1885 ?",["La rage","La tuberculose","La peste","La variole"],0,"La rage. Il l'a testé sur un petit garçon mordu par un chien, Joseph Meister, qui a survécu."]
],
5: [
 ["Que veut dire « faire chou blanc » ?",["Avoir peur","Échouer","Mentir","Cuisiner"],1,"Échouer, ne rien obtenir. L'expression viendrait du jeu de quilles, où un « coup blanc » ne fait tomber aucune quille."],
 ["Dans Les Visiteurs, quel acteur joue Jacquouille la Fripouille ?",["Gérard Jugnot","Thierry Lhermitte","Jean Reno","Christian Clavier"],3,"Christian Clavier. Jean Reno joue Godefroy de Montmirail."],
 ["Quel slogan est resté célèbre de Mai 68 ?",["Sous les pavés, la plage","Travailler plus pour gagner plus","Le changement, c'est maintenant","Liberté, égalité, fraternité"],0,"« Sous les pavés, la plage », peint sur les murs du Quartier latin."],
 ["Qui les Marseillais appellent-ils « la Bonne Mère » ?",["Notre-Dame-de-la-Garde","Le Vieux-Port","La mairie","La mer Méditerranée"],0,"Notre-Dame-de-la-Garde, la basilique qui veille sur la ville du haut de sa colline."],
 ["Quel âge avait Louis Braille quand il a inventé son système d'écriture pour les aveugles ?",["60 ans","40 ans","15 ans","25 ans"],2,"Environ 15 ans. Devenu aveugle à 3 ans, il a mis au point son alphabet de points en relief alors qu'il était encore élève."]
],
6: [
 ["Pour la Saint-Nicolas, qui accompagne le saint et punit les enfants pas sages ?",["Le Croque-mitaine","La Befana","Krampus","Le Père Fouettard"],3,"Le Père Fouettard. Son cousin autrichien et bavarois, c'est Krampus."],
 ["En Alsace, comment s'appelle la brioche en forme de bonhomme qu'on mange à la Saint-Nicolas ?",["Le bretzel","Le bredele","Le mannele","Le kougelhopf"],2,"Le mannele (ou manala), « petit bonhomme » en alsacien."],
 ["De quelle langue vient le verbe « kiffer » ?",["De l'arabe","Du wolof","De l'anglais","Du verlan"],0,"De l'arabe « kif », le bien-être, le plaisir."],
 ["Pour quel film Omar Sy a-t-il reçu le César du meilleur acteur ?",["Samba","Lupin","Intouchables","Chocolat"],2,"Intouchables, en 2012. C'était la première fois qu'un acteur noir remportait ce César."],
 ["Dans quelle ville La Marseillaise a-t-elle été composée ?",["Lyon","Strasbourg","Marseille","Paris"],1,"À Strasbourg, en 1792, sous le nom de « Chant de guerre pour l'armée du Rhin ». Elle doit son nom aux volontaires marseillais qui la chantaient en montant à Paris."]
],
7: [
 ["En Colombie, que fait-on le soir du 7 décembre ?",["On décore le sapin","On allume des bougies devant les maisons","On tire des feux d'artifice sur la mer","On mange des buñuelos à minuit"],1,"C'est le Día de las Velitas, la veille de l'Immaculée Conception. Le même jour, Lyon célèbre sa Fête des Lumières, pour la même fête religieuse."],
 ["De quelle langue vient le mot « toubib » ?",["Du latin","Du turc","De l'hébreu","De l'arabe"],3,"De l'arabe « tbib », le médecin. Il est arrivé en français par l'argot militaire."],
 ["Dans quel café travaille Amélie Poulain ?",["Le Café de Flore","Le Procope","Les Deux Moulins","Les Deux Magots"],2,"Les Deux Moulins, rue Lepic, à Montmartre. Il existe vraiment."],
 ["Pourquoi le coq est-il un symbole de la France ?",["À cause d'un jeu de mots latin","Parce que Napoléon l'adorait","À cause d'une victoire militaire","Parce que c'était l'animal de Clovis"],0,"En latin, « gallus » veut dire à la fois coq et Gaulois."],
 ["Quel symbole figure sur le drapeau corse ?",["Un aigle","Une tête de Maure","Un lion","Une croix"],1,"Une tête de Maure, coiffée d'un bandeau blanc. Pascal Paoli l'a adoptée en 1762."]
],
8: [
 ["Que veut dire « ouf » ?",["Fatigué","Ouvert","Fou","Énorme"],2,"C'est le verlan de « fou ». Un truc de ouf, c'est un truc incroyable."],
 ["Qui a créé le personnage d'Arsène Lupin ?",["Alexandre Dumas","Jules Verne","Gaston Leroux","Maurice Leblanc"],3,"Maurice Leblanc. Sa maison d'Étretat, en Normandie, est devenue un musée. Omar Sy a remis le personnage à la mode dans la série Lupin."],
 ["Qui a créé le baccalauréat, en 1808 ?",["De Gaulle","Napoléon","Louis XIV","Jules Ferry"],1,"Napoléon. Le premier bac était surtout un examen oral."],
 ["Quel piment fait sécher sur les façades de son village, au Pays basque ?",["Le piment d'Espelette","Le piquillo","Le piment oiseau","Le piment de Cayenne"],0,"Le piment d'Espelette. À la fin de l'été, les cordes de piments rouges décorent les façades."],
 ["En 1783, qui fait voler le premier ballon à air chaud ?",["Les frères Lumière","Les frères Michelin","Les frères Wright","Les frères Montgolfier"],3,"Les frères Montgolfier, à Annonay, en Ardèche. D'où le nom de montgolfière."]
],
9: [
 ["Quelle loi a été promulguée le 9 décembre 1905 ?",["Le droit de vote des femmes","La séparation des Églises et de l'État","L'école gratuite et obligatoire","Le repos du dimanche"],1,"La séparation des Églises et de l'État, socle de la laïcité. Le 9 décembre est d'ailleurs la Journée nationale de la laïcité."],
 ["Dans OSS 117 : Le Caire, nid d'espions, que demande Hubert Bonisseur de La Bath au restaurant ?",["Où sont les toilettes ?","Un petit verre de vin, s'il vous plaît","Comment est votre blanquette ?","Avez-vous du roquefort ?"],2,"« Comment est votre blanquette ? » Une réplique culte de Jean Dujardin, devenue un mème."],
 ["Dans la série Dix pour cent, comment s'appelle le chien de l'agence ?",["Belmondo","Bourvil","Delon","Jean Gabin"],3,"Jean Gabin, comme le monstre sacré du cinéma français."],
 ["Avec quel fromage fait-on la tartiflette ?",["Le comté","Le beaufort","La raclette","Le reblochon"],3,"Le reblochon. Et la recette n'est pas si ancienne : elle a été popularisée dans les années 1980 par les producteurs de reblochon."],
 ["Sur le Tour de France, que récompense le maillot à pois ?",["Le meilleur grimpeur","Le plus combatif","Le meilleur sprinteur","Le meilleur jeune"],0,"Le meilleur grimpeur. Le maillot vert va au meilleur sprinteur, le blanc au meilleur jeune."]
],
10: [
 ["En argot, qui est le « daron » ?",["Le père","Le frère","Le patron","Le policier"],0,"Le père (et la daronne, la mère). Le mot existe en argot depuis plusieurs siècles."],
 ["Dans quelle ville est née Aya Nakamura ?",["Abidjan","Dakar","Paris","Bamako"],3,"À Bamako, au Mali, avant de grandir à Aulnay-sous-Bois. Elle est l'une des chanteuses francophones les plus écoutées au monde."],
 ["En quelle année les pièces et billets en euros remplacent-ils le franc ?",["2000","2002","1999","2005"],1,"Le 1er janvier 2002. L'euro existait déjà depuis 1999, mais seulement pour les banques et les marchés."],
 ["Quelle ville se proclame capitale mondiale du cassoulet ?",["Castelnaudary","Albi","Toulouse","Carcassonne"],0,"Castelnaudary, mais Toulouse et Carcassonne revendiquent aussi leur version. La querelle dure depuis longtemps."],
 ["Quel youtubeur français organise le GP Explorer, une course automobile entre créateurs de contenu ?",["Cyprien","Mister V","Squeezie","Norman"],2,"Squeezie. La première édition a eu lieu en 2022, sur le circuit Bugatti du Mans."]
],
11: [
 ["Que veut dire « chelou » ?",["Louche","Cher","Joli","Lent"],0,"C'est le verlan de « louche » : bizarre, pas net."],
 ["Quel duo français a fait toute sa carrière caché sous des casques de robot ?",["Air","Justice","Daft Punk","Cassius"],2,"Daft Punk. Le duo s'est séparé en 2021, avec une vidéo d'adieu intitulée « Epilogue »."],
 ["Qui a été la première femme Première ministre en France ?",["Simone Veil","Édith Cresson","Élisabeth Borne","Ségolène Royal"],1,"Édith Cresson, en 1991. Il a fallu attendre 2022 pour la deuxième, Élisabeth Borne."],
 ["De quelle ville le canelé est-il la spécialité ?",["Toulouse","Lyon","Nantes","Bordeaux"],3,"Bordeaux. On dit qu'il serait né grâce aux jaunes d'œufs laissés par les viticulteurs, qui utilisaient les blancs pour clarifier le vin."],
 ["Sur quelle surface se joue le tournoi de Roland-Garros ?",["Terre battue","Dur","Gazon","Moquette"],0,"Sur terre battue. C'est le seul tournoi du Grand Chelem sur cette surface."]
],
12: [
 ["Au Québec, qui est ta « blonde » ?",["Ta voisine","Ta bière","Ta petite amie","Ta sœur"],2,"Ta petite amie, quelle que soit sa couleur de cheveux. Et ton « chum », c'est ton copain."],
 ["Dans quelle ville est né Joe Dassin, l'interprète des « Champs-Élysées » ?",["Paris","Montréal","Bruxelles","New York"],3,"À New York, en 1938. Son père était le réalisateur américain Jules Dassin."],
 ["Qui a porté la loi de 1975 qui légalise l'IVG ?",["Simone Veil","Simone de Beauvoir","Françoise Giroud","Gisèle Halimi"],0,"Simone Veil, alors ministre de la Santé, au terme de débats très violents à l'Assemblée."],
 ["À Lyon, qu'est-ce qu'un « bouchon » ?",["Un restaurant traditionnel","Une spécialité de charcuterie","Un embouteillage","Un petit verre de vin"],0,"Un restaurant traditionnel lyonnais, où l'on mange tablier de sapeur, quenelles et saucisson brioché."],
 ["Quel est le vrai nom de Molière ?",["François-Marie Arouet","Jean-Baptiste Poquelin","Jean de La Fontaine","Pierre Corneille"],1,"Jean-Baptiste Poquelin. François-Marie Arouet, c'est Voltaire."]
],
13: [
 ["Comment dit-on 90 en Belgique et en Suisse ?",["Neufante","Novante","Nonante","Quatre-vingt-dix"],2,"Nonante. Et 70 se dit septante."],
 ["Pour quel pays Céline Dion a-t-elle gagné l'Eurovision en 1988 ?",["La Suisse","La France","La Belgique","Le Canada"],0,"Pour la Suisse, avec « Ne partez pas sans moi ». Le Canada ne participe pas à l'Eurovision."],
 ["Quelle est la première femme entrée au Panthéon pour ses propres mérites ?",["Joséphine Baker","Marie Curie","George Sand","Simone Veil"],1,"Marie Curie, en 1995, aux côtés de son mari Pierre."],
 ["Quelle ville est surnommée « la Ville rose » ?",["Nice","Albi","Montpellier","Toulouse"],3,"Toulouse, pour la couleur de ses briques en terre cuite."],
 ["Quelle actrice joue Amélie Poulain ?",["Ludivine Sagnier","Marion Cotillard","Mélanie Laurent","Audrey Tautou"],3,"Audrey Tautou. Le film de Jean-Pierre Jeunet est sorti en 2001."]
],
14: [
 ["Quel chef présente Cauchemar en cuisine sur M6 ?",["Thierry Marx","Cyril Lignac","Philippe Etchebest","Jean-François Piège"],2,"Philippe Etchebest, aussi juré de Top Chef, connu pour son franc-parler."],
 ["Quelle est la dernière chanson française à avoir gagné l'Eurovision ?",["« Voilà », Barbara Pravi","« Tom Pillibi », Jacqueline Boyer","« Mon cœur résiste encore », Lisa Angell","« L'Oiseau et l'Enfant », Marie Myriam"],3,"« L'Oiseau et l'Enfant », de Marie Myriam, en 1977. Barbara Pravi est arrivée deuxième en 2021."],
 ["Qui est entrée au Panthéon en 2021, première femme noire à y reposer ?",["Joséphine Baker","Gisèle Halimi","Maryse Condé","Christiane Taubira"],0,"Joséphine Baker, artiste, résistante et militante contre le racisme."],
 ["Dans quelle région se trouve le Mont-Saint-Michel ?",["En Bretagne","En Normandie","À cheval sur les deux","En Pays de la Loire"],1,"En Normandie, ce qui agace toujours les Bretons. Le dicton dit que le Couesnon, dans sa folie, a mis le Mont en Normandie."],
 ["Quel écrivain colombien a vécu fauché dans une chambre de bonne du Quartier latin, dans les années 1950 ?",["Álvaro Mutis","Fernando Vallejo","Jorge Isaacs","Gabriel García Márquez"],3,"Gabriel García Márquez. Il logeait rue Cujas et y a écrit « Pas de lettre pour le colonel »."]
],
15: [
 ["Dans quelle partie de la France dit-on « chocolatine » plutôt que « pain au chocolat » ?",["L'Est","La Bretagne","Le Sud-Ouest","Le Nord"],2,"Le Sud-Ouest, autour de Toulouse et Bordeaux. Le débat est sans fin."],
 ["Dans Les Aventures de Rabbi Jacob, de quelle couleur est le chewing-gum dans lequel tombe Louis de Funès ?",["Rose","Bleu","Blanc","Vert"],3,"Vert. Une scène culte tournée dans une vraie cuve géante."],
 ["À qui attribue-t-on la phrase « Paris vaut bien une messe » ?",["Henri IV","Napoléon","François Ier","Louis XIV"],0,"À Henri IV, protestant, qui s'est converti au catholicisme pour devenir roi de France."],
 ["Quel jour sort le beaujolais nouveau ?",["Le dernier vendredi de novembre","Le troisième jeudi de novembre","Le 1er novembre","Le 11 novembre"],1,"Le troisième jeudi de novembre, à minuit pile."],
 ["Quel record de vitesse un TGV a-t-il établi en 2007 ?",["Environ 475 km/h","Environ 675 km/h","Environ 380 km/h","Environ 575 km/h"],3,"574,8 km/h, le record du monde de vitesse sur rail pour un train classique."]
],
16: [
 ["Selon une légende tenace, d'où viendrait le mot « bistro » ?",["De l'italien","De cosaques russes pressés","Du mot « bis »","D'un patron de café nommé Bistrot"],1,"Les cosaques, à Paris en 1814, auraient crié « bystro » (vite, en russe). C'est très probablement faux, car le mot n'apparaît que bien plus tard. Mais l'histoire est trop belle."],
 ["Quel film a longtemps détenu le record d'entrées pour un film français en France ?",["Le Corniaud","La Grande Vadrouille","Astérix et Obélix : Mission Cléopâtre","Les Visiteurs"],1,"La Grande Vadrouille (1966), avec Bourvil et de Funès, jusqu'à Bienvenue chez les Ch'tis en 2008."],
 ["Combien de temps a duré le règne de Louis XIV ?",["82 ans","32 ans","52 ans","72 ans"],3,"72 ans, de 1643 à 1715. Il est devenu roi à 4 ans."],
 ["Quel est le plus long fleuve de France ?",["La Garonne","Le Rhône","La Loire","La Seine"],2,"La Loire, environ 1 000 km, entièrement en France."],
 ["Avec quel pays la France a-t-elle construit le Concorde ?",["Le Royaume-Uni","L'Italie","L'Allemagne","Les États-Unis"],0,"Le Royaume-Uni. L'avion a volé pour la première fois en 1969, à Toulouse, et a été retiré du service en 2003."]
],
17: [
 ["Que veut dire « avoir un poil dans la main » ?",["Être radin","Être paresseux","Être chanceux","Être maladroit"],1,"Être paresseux. À force de ne jamais rien faire de ses mains, un poil finirait par y pousser."],
 ["Dans Fort Boyard, qui pose les énigmes du haut de sa tour ?",["Le Père Fouras","Passe-Partout","La Boule","Monsieur Loyal"],0,"Le Père Fouras, avec ses énigmes en vers."],
 ["Dans quelle ville est né Napoléon Bonaparte ?",["Ajaccio","Bastia","Marseille","Nice"],0,"À Ajaccio, en 1769, juste un an après le rattachement de la Corse à la France."],
 ["Qui était Dom Pérignon ?",["Un chimiste","Un roi","Un moine","Un vigneron américain"],2,"Un moine bénédictin de l'abbaye d'Hautvillers. On lui attribue à tort l'invention du champagne, mais il a beaucoup fait progresser son élaboration."],
 ["Lors de la finale de la Coupe du monde 2006, qui reçoit le coup de tête de Zidane ?",["Fabio Cannavaro","Gianluigi Buffon","Andrea Pirlo","Marco Materazzi"],3,"Marco Materazzi. Zidane est expulsé, et l'Italie gagne aux tirs au but."]
],
18: [
 ["Que veut dire « être à l'ouest » ?",["Être très sûr de soi","Être distrait, déconnecté","Être en retard","Être en vacances"],1,"Être distrait, dans la lune, pas tout à fait là."],
 ["Dans quelle ville se passe la série Plus belle la vie ?",["Montpellier","Toulon","Marseille","Nice"],2,"À Marseille, dans le quartier imaginaire du Mistral."],
 ["Où Vercingétorix a-t-il été vaincu par Jules César, en 52 avant J.-C. ?",["Alésia","Bibracte","Lutèce","Gergovie"],0,"À Alésia. À Gergovie, quelques mois plus tôt, c'est lui qui avait battu César."],
 ["Le calvados est une eau-de-vie de quoi ?",["De prune","De poire","De vin","De cidre"],3,"De cidre, donc de pommes, distillé puis vieilli en fût."],
 ["Dans quelle ville est née la pétanque, en 1907 ?",["Marseille","Avignon","La Ciotat","Nice"],2,"À La Ciotat. Un joueur souffrant de rhumatismes ne pouvait plus prendre d'élan : on a joué « pieds tanqués », les pieds joints."]
],
19: [
 ["Que veut dire « avoir la dalle » ?",["Avoir sommeil","Avoir faim","Avoir de l'argent","Avoir de la chance"],1,"Avoir faim, très faim."],
 ["Qui a créé Le Petit Nicolas ?",["Goscinny et Uderzo","Hergé","Goscinny et Sempé","Jean-Jacques Sempé seul"],2,"René Goscinny pour le texte, Jean-Jacques Sempé pour les dessins. Goscinny a aussi créé Astérix avec Uderzo."],
 ["Combien de départements compte la France métropolitaine ?",["101","96","106","86"],1,"96. On arrive à 101 avec les cinq départements d'outre-mer."],
 ["Quel fromage est surnommé « le roi des fromages » ?",["Le brie","Le camembert","Le roquefort","Le comté"],0,"Le brie. Le titre lui aurait été décerné lors d'un concours au congrès de Vienne, en 1815."],
 ["Combien de médailles d'or individuelles Léon Marchand a-t-il gagnées aux JO de Paris 2024 ?",["3","5","2","4"],3,"Quatre : 200 m papillon, 200 m brasse, 200 m et 400 m quatre nages."]
],
20: [
 ["Que veut dire le mot « bobo » ?",["Bon et beau","Bourgeois-bohème","Bobine","Bon boulot"],1,"Bourgeois-bohème. Le mot vient de l'anglais « bourgeois bohemian », popularisé en 2000 par le journaliste américain David Brooks."],
 ["Quel est le vrai nom de Johnny Hallyday ?",["Johnny Duval","Jean-Pierre Martin","Jean-Philippe Smet","Jean-Jacques Hallier"],2,"Jean-Philippe Smet. Son père était belge."],
 ["Que représente Marianne ?",["La République","Une héroïne de la Révolution","La ville de Paris","Une reine de France"],0,"La République. Ses bustes ont pris les traits de Brigitte Bardot, Catherine Deneuve ou Laetitia Casta."],
 ["Que ne doit-on pas trouver dans une quiche lorraine traditionnelle ?",["Du fromage","De la crème","Des œufs","Des lardons"],0,"Du fromage ! La recette d'origine, c'est pâte, œufs, crème et lardons. Le gruyère est un ajout plus tardif."],
 ["À Paris, à quoi sert la statue du zouave du pont de l'Alma ?",["À marquer le kilomètre zéro","À indiquer le nord","À honorer un roi","À mesurer les crues de la Seine"],3,"À mesurer les crues. En 1910, l'eau lui est arrivée jusqu'aux épaules."]
],
21: [
 ["Pourquoi la coquille Saint-Jacques porte-t-elle ce nom ?",["Parce qu'on la mangeait le jour de la Saint-Jacques","Parce que c'était l'emblème des pèlerins de Compostelle","À cause d'un pêcheur nommé Jacques","À cause de sa forme de croix"],1,"Les pèlerins en route vers Saint-Jacques-de-Compostelle la portaient comme emblème."],
 ["Lors de la cérémonie d'ouverture des JO de Paris 2024, quel groupe de metal français a joué aux fenêtres de la Conciergerie ?",["Mass Hysteria","Trust","Gojira","Shaka Ponk"],2,"Gojira, avec « Ah ! ça ira », entouré de Marie-Antoinette décapitées. Une première pour un groupe de metal aux Jeux."],
 ["Le fameux « 49.3 », c'est quoi exactement ?",["Un décret de 1958","Le numéro d'une loi sur les retraites","Un article du Code électoral","Un article de la Constitution"],3,"L'article 49, alinéa 3 de la Constitution. Il permet au gouvernement de faire adopter un texte sans vote, sauf si une motion de censure le renverse."],
 ["Quel cépage alsacien porte un nom qui veut dire « épicé » en allemand ?",["Le gewurztraminer","Le pinot gris","Le riesling","Le sylvaner"],0,"Le gewurztraminer (« Gewürz », épice). Notes de litchi et de rose, parfait avec le munster."],
 ["Pour quel événement le métro de Paris a-t-il été inauguré, en 1900 ?",["L'Exposition universelle","Le centenaire de la Révolution","Les Jeux olympiques","Le couronnement d'un roi"],0,"L'Exposition universelle de 1900. Les Jeux olympiques de Paris ont aussi eu lieu cette année-là."]
],
22: [
 ["Que veut dire « prendre la poudre d'escampette » ?",["Se maquiller","S'endormir","Se mettre en colère","S'enfuir"],3,"S'enfuir, filer en douce."],
 ["Pour quelle chanteuse Serge Gainsbourg a-t-il écrit « La Javanaise », en 1963 ?",["Françoise Hardy","Juliette Gréco","Jane Birkin","Brigitte Bardot"],1,"Juliette Gréco. Le piège, c'est Birkin, que Gainsbourg n'a rencontrée qu'en 1968."],
 ["Qui a écrit la Déclaration des droits de la femme et de la citoyenne, en 1791 ?",["Louise Michel","Madame Roland","Olympe de Gouges","George Sand"],2,"Olympe de Gouges, guillotinée en 1793. Elle écrivait que si la femme a le droit de monter sur l'échafaud, elle doit avoir celui de monter à la tribune."],
 ["Quel aliment les supporters du Stade rennais célèbrent-ils dans leur chant « … je t'aime » ?",["La crêpe","Le kouign-amann","Le far breton","La galette-saucisse"],3,"La galette-saucisse : une saucisse grillée roulée dans une galette de blé noir, star des buvettes du stade."],
 ["Jusqu'en quelle année le Minitel a-t-il fonctionné en France ?",["2012","2020","2002","1995"],0,"Jusqu'en 2012. Lancé au début des années 1980, il a longtemps été la fierté du « web » à la française."]
],
23: [
 ["Lequel de ces mots français vient du nahuatl, la langue des Aztèques ?",["Café","Vanille","Sucre","Chocolat"],3,"Chocolat, de « xocolatl ». Tomate et avocat viennent aussi du nahuatl."],
 ["Dans La Cité de la peur, comment s'appelle la danse d'Odile Deray et Serge Karamazov ?",["La Lambada","Le Madison","La Carioca","La Macarena"],2,"La Carioca."],
 ["Dans Bienvenue chez les Ch'tis, dans quelle ville du Nord Philippe Abrams est-il muté ?",["Bergues","Dunkerque","Lille","Roubaix"],0,"Bergues. Le film a fait plus de 20 millions d'entrées en France."],
 ["La tapisserie de Bayeux n'en est pas vraiment une. Qu'est-ce que c'est ?",["Une broderie","Une peinture","Un vitrail","Une mosaïque"],0,"Une broderie de près de 70 mètres, qui raconte la conquête de l'Angleterre par Guillaume le Conquérant en 1066."],
 ["Quel est le numéro du département d'Ille-et-Vilaine ?",["29","35","22","56"],1,"35. Le 22, ce sont les Côtes-d'Armor, le 29 le Finistère et le 56 le Morbihan."]
],
24: [
 ["Comment dit-on « Joyeux Noël » en breton ?",["Kenavo","Trugarez","Bloavezh mat","Nedeleg laouen"],3,"Nedeleg laouen ! Les autres veulent dire bonne année, merci et au revoir."],
 ["Que représente la bûche de Noël ?",["Une crèche","Un tronc d'arbre","Un rouleau de parchemin","Une cheminée"],1,"La vraie bûche qu'on faisait brûler dans l'âtre pendant la veillée de Noël."],
 ["Quelle ville accueille le plus ancien marché de Noël de France ?",["Strasbourg","Colmar","Lyon","Lille"],0,"Strasbourg. Son Christkindelsmärik existe depuis 1570."],
 ["Que sont les santons de Provence ?",["Des bougies","Des figurines de crèche","Des biscuits","Des chants de Noël"],1,"Des figurines de crèche en argile. Le mot vient du provençal « santoun », petit saint."],
 ["Qui chante « Petit Papa Noël », le single le plus vendu de l'histoire en France ?",["Yves Montand","Tino Rossi","Charles Aznavour","Johnny Hallyday"],1,"Tino Rossi, en 1946. Plus de 5,7 millions d'exemplaires vendus en France."],
 ["Dans quel pays a été créé le chant « Douce nuit », en 1818 ?",["En Autriche","En Suisse","En Allemagne","En Angleterre"],0,"En Autriche, à Oberndorf, près de Salzbourg."],
 ["En Colombie, combien de jours dure la Novena de Aguinaldos ?",["9","24","12","7"],0,"Neuf jours, du 16 au 24 décembre, avec prières, chants et buñuelos."],
 ["En Colombie, avec quel dessert mange-t-on les buñuelos à Noël ?",["Le flan","La cocada","L'arequipe","La natilla"],3,"La natilla, une sorte de crème ferme à la panela et à la cannelle."],
 ["Le Père Noël en rouge et blanc, une invention de Coca-Cola ?",["Non, c'est une invention de Disney","Oui, en 1931","Non, il était déjà en rouge avant","Oui, en 1950"],2,"Non. Il était déjà souvent en rouge avant, mais les publicités Coca-Cola dessinées à partir de 1931 ont fixé son image dans le monde entier."],
 ["En quelle année Mariah Carey a-t-elle sorti « All I Want for Christmas Is You » ?",["1994","2004","1989","1999"],0,"En 1994. Elle revient en tête des classements presque chaque mois de décembre depuis."],
 ["De quelle couleur est le Grinch ?",["Bleu","Violet","Vert","Rouge"],2,"Vert. Créé par le Dr Seuss en 1957, il déteste Noël avant de se laisser attendrir."],
 ["En France, traditionnellement, quand s'embrasse-t-on sous le gui ?",["Le soir de Noël","Le jour de l'An","À la Saint-Nicolas","À l'Épiphanie"],1,"Au Nouvel An, en se souhaitant la bonne année. Chez les Anglo-Saxons, c'est plutôt à Noël."],
 ["D'où vient le mot « réveillon » ?",["D'un mot latin pour fête","Du verbe réveiller","D'un plat ancien","D'une ville de Normandie"],1,"Du verbe réveiller : on veille tard pour faire un repas au milieu de la nuit."],
 ["Dans quel pays une chaîne de poulet frit américaine est-elle devenue une tradition de Noël ?",["Au Japon","Aux Philippines","Au Mexique","En Corée du Sud"],0,"Au Japon, depuis une campagne publicitaire de KFC en 1974. Il faut parfois réserver son seau des semaines à l'avance."],
 ["Dans quelle ville se trouve le secrétariat du Père Noël, qui répond aux lettres des enfants ?",["Strasbourg","Libourne","Paris","Rovaniemi"],1,"À Libourne, près de Bordeaux. En 1962, c'est la psychanalyste Françoise Dolto qui a rédigé la première réponse type."],
 ["Combien de fantômes rendent visite à Scrooge dans Un chant de Noël, de Dickens ?",["3","2","5","4"],3,"Quatre : Jacob Marley, puis les esprits des Noëls passés, du Noël présent et des Noëls à venir."],
 ["Dans Maman, j'ai raté l'avion, comment s'appelle le petit garçon oublié par sa famille ?",["Tommy","Kyle","Danny","Kevin"],3,"Kevin McCallister, joué par Macaulay Culkin."],
 ["Combien de rennes tirent le traîneau du Père Noël, Rudolph compris ?",["6","8","12","9"],3,"Neuf : les huit rennes de la tradition, plus Rudolph qui ouvre la marche avec son nez lumineux."],
 ["Que s'est-il passé à Noël 1914, sur le front ?",["Une offensive surprise","La fin de la guerre a été annoncée","Des soldats ennemis ont fraternisé","Une grande tempête de neige"],2,"Des trêves spontanées : chants, échanges de cigarettes, parfois un match de foot. Le film Joyeux Noël de Christian Carion (2005) le raconte."],
 ["Dans L'Étrange Noël de Monsieur Jack, de quelle ville vient Jack Skellington ?",["La ville de la Saint-Valentin","La ville de Pâques","La ville d'Halloween","La ville de Noël"],2,"De la ville d'Halloween, dont il est le roi des citrouilles. Il découvre la ville de Noël et veut s'en emparer."],
 ["Qu'est-ce qu'un chapon ?",["Une pintade","Un canard engraissé","Un coq castré","Une jeune dinde"],2,"Un coq castré et engraissé, à la chair très tendre. Un classique du repas de Noël."],
 ["D'où vient le nom « Santa Claus » ?",["Du norvégien","De l'allemand","Du néerlandais","Du latin"],2,"Du néerlandais « Sinterklaas », c'est-à-dire saint Nicolas, apporté à New York par les colons hollandais."],
 ["Quelle ville colombienne est célèbre pour ses illuminations de Noël, les alumbrados ?",["Cali","Bogotá","Cartagena","Medellín"],3,"Medellín, où des millions de lumières habillent la ville et les rives du fleuve chaque décembre."],
 ["Dans Le Père Noël est une ordure, quelle spécialité monsieur Preskovitch apporte-t-il ?",["Des doubitchous","Des pirojki","Des loukoums","Des baklavas"],0,"Des doubitchous de Sofia, « roulés à la main sous les aisselles ». Personne n'ose y goûter. Joyeux Noël !"]
]
};
