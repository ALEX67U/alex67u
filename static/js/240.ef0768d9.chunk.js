"use strict";(self.webpackChunkalex67u=self.webpackChunkalex67u||[]).push([[240,479],{683:(e,a,s)=>{s.d(a,{A:()=>i});s(5043);var r=s(1175),t=s(579);const i=e=>{let{videoId:a}=e;const s="https://www.youtube.com/embed/".concat(a);return(0,t.jsx)("div",{className:r.A.videoContainer,children:(0,t.jsx)("iframe",{className:r.A.video,src:s,title:"YouTube video player",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})})}},8240:(e,a,s)=>{s.r(a),s.d(a,{default:()=>n});s(5043);var r=s(4479),t=s(3051),i=(s(683),s(579));const n=()=>(0,i.jsxs)("div",{className:r.default.article,children:[(0,i.jsx)(t.A,{filePath:"".concat("/alex67u","/data/video/3Drendu.mp4")}),(0,i.jsxs)("div",{className:"".concat(r.default.paragraph_50," ").concat(r.default.padding1em),children:[(0,i.jsx)("h4",{children:"Exemple de rendu"}),(0,i.jsx)("p",{children:"Cette vid\xe9o \xe0 r\xe9alis\xe9e \xe0 l'aide du logiciel OBS. Comme le rendu 3D est calcul\xe9 en temps r\xe9el en parall\xe8le avec l'enregistrement vid\xe9o, il y a une l\xe9g\xe8re latence de la video due aux performances limit\xe9es de mon ordinateur, qui est \xe9quip\xe9 uniquement d'un GPU Intel int\xe9gr\xe9. Cela a impact\xe9e la fluidit\xe9 de la capture video."})]}),(0,i.jsx)("p",{className:r.default.paragraph_100,children:"Dans cette vid\xe9o, on peut voir plusieurs formes simples en 3D qui mettent en pratique des concepts essentiels comme l'\xe9clairage, les shaders, les mat\xe9riaux et la projection d'ombres via les Shadow Maps. En parall\xe8le, j'ai \xe9galement exp\xe9riment\xe9 d'autres effets graphiques, comme les Normal Maps, le Parallax Mapping et des effets de post-traitement comme le Bloom, pour am\xe9liorer l\u2019aspect visuel. Ces fonctionnalit\xe9s ne sont pas toutes visibles dans cette capture mais ont \xe9t\xe9 test\xe9es s\xe9par\xe9ment durant le d\xe9veloppement."}),(0,i.jsx)("h3",{className:r.default.subtitle,children:"1. Choix d'OpenGL"}),(0,i.jsxs)("div",{className:r.default.paragraph_50,children:[(0,i.jsx)("h4",{children:"1.1 Pourquoi OpenGL ?"}),(0,i.jsxs)("p",{children:["J'ai choisi ",(0,i.jsx)("a",{href:"https://www.opengl.org/",children:"OpenGL"})," comme biblioth\xe8que graphique principale pour ce projet en raison de sa maturit\xe9 et de sa popularit\xe9 dans le domaine du d\xe9veloppement 3D. En tant que norme ouverte largement adopt\xe9e, OpenGL est compatible avec la plupart des syst\xe8mes d'exploitation, ce qui en fait un excellent choix pour d\xe9velopper des applications multiplateformes. De plus, la richesse de sa documentation et l'\xe9norme communaut\xe9 de d\xe9veloppeurs sont des atouts pr\xe9cieux pour r\xe9soudre les probl\xe8mes techniques et am\xe9liorer mes comp\xe9tences."]})]}),(0,i.jsx)("div",{className:r.default.paragraph_50,children:(0,i.jsx)("img",{className:r.default.paragraph_100,src:"/alex67u/data/images/opengl_logo.jpg",alt:"opengl_logo.jpg"})}),(0,i.jsxs)("div",{className:r.default.paragraph_100,children:[(0,i.jsx)("h4",{children:"1.2 Les avantages de l'approche bas niveau"}),(0,i.jsx)("p",{children:"Contrairement \xe0 d'autres biblioth\xe8ques plus haut niveau, OpenGL offre un contr\xf4le direct sur le pipeline graphique, ce qui permet une meilleure compr\xe9hension de ce qui se passe \xe0 chaque \xe9tape du rendu. Cette approche bas niveau, bien que plus complexe, m'a permis de personnaliser les moindres d\xe9tails de mon moteur de rendu et d\u2019apprendre en profondeur des concepts cl\xe9s comme la gestion des tampons (buffers) et l'interaction avec les shaders."})]}),(0,i.jsx)("h3",{className:r.default.subtitle,children:"2. Comment marche la 3D"}),(0,i.jsxs)("div",{className:r.default.paragraph_100,children:[(0,i.jsx)("h4",{children:"2.1 La repr\xe9sentation des objets en 3D"}),(0,i.jsx)("p",{children:"En programmation 3D, chaque objet est constitu\xe9 de sommets, qui sont des points d\xe9finis dans un espace tridimensionnel \xe0 l\u2019aide de coordonn\xe9es X, Y et Z. Ces sommets sont ensuite connect\xe9s pour former des triangles, l\u2019unit\xe9 de base du rendu 3D. Le rendu final est une projection de ces triangles sur un plan 2D (l\u2019\xe9cran), selon une certaine perspective."})]}),(0,i.jsx)("div",{className:"".concat(r.default.paragraph_100," ").concat(r.default.margincontent),children:(0,i.jsx)("img",{className:r.default.paragraph_50,src:"/alex67u/data/images/icos.gif",alt:"icos.gif"})}),(0,i.jsxs)("div",{className:r.default.paragraph_100,children:[(0,i.jsx)("h4",{children:"2.2 Les transformations g\xe9om\xe9triques"}),(0,i.jsx)("p",{children:"Pour manipuler les objets dans la sc\xe8ne, il est n\xe9cessaire d\u2019appliquer des transformations g\xe9om\xe9triques comme la translation, la rotation et le redimensionnement. Ces transformations sont r\xe9alis\xe9es \xe0 l'aide de matrices (de 4x4 dans un espace homog\xe8ne) qui permettent de d\xe9placer, orienter et redimensionner les objets dans l'espace 3D. Ces matrices sont ensuite combin\xe9es pour former la matrice de transformation finale qui est appliqu\xe9e \xe0 chaque sommet de l'objet."})]}),(0,i.jsxs)("div",{className:r.default.paragraph_100,children:[(0,i.jsx)("h4",{children:"2.3 La cam\xe9ra et la perspective"}),(0,i.jsx)("p",{children:"La cam\xe9ra virtuelle joue un r\xf4le crucial dans le rendu 3D. Elle d\xe9finit le point de vue depuis lequel la sc\xe8ne est observ\xe9e. Deux matrices cl\xe9s sont utilis\xe9es pour la projection en 3D : la matrice de vue, qui simule le positionnement et l'orientation de la cam\xe9ra, et la matrice de projection, qui g\xe8re la mani\xe8re dont les objets sont projet\xe9s sur l'\xe9cran (projection perspective ou orthographique)."})]}),(0,i.jsx)("h3",{className:r.default.subtitle,children:"3. Les shaders, lumi\xe8re et mat\xe9riaux"}),(0,i.jsxs)("div",{className:r.default.paragraph_100,children:[(0,i.jsx)("h4",{children:"3.1 Introduction aux shaders"}),(0,i.jsx)("p",{children:"Les shaders sont des programmes ex\xe9cut\xe9s directement sur le GPU pour traiter chaque sommet ou chaque pixel de l'image. Dans OpenGL, on distingue principalement deux types de shaders : le vertex shader, qui s\u2019occupe de la transformation des sommets, et le fragment shader, qui d\xe9termine la couleur finale de chaque pixel. La possibilit\xe9 de programmer ces shaders en GLSL (OpenGL Shading Language) offre une grande flexibilit\xe9 pour personnaliser l'apparence visuelle des objets."})]}),(0,i.jsxs)("div",{className:r.default.paragraph_100,children:[(0,i.jsx)("h4",{children:"3.2 Techniques d\u2019\xe9clairage"}),(0,i.jsx)("p",{children:"L'\xe9clairage est un \xe9l\xe9ment fondamental pour donner du r\xe9alisme \xe0 une sc\xe8ne 3D. J'ai impl\xe9ment\xe9 plusieurs types de lumi\xe8res : directionnelle (comme la lumi\xe8re du soleil), ponctuelle (comme une ampoule) et par spot (comme un projecteur). Chaque type de lumi\xe8re a ses propres caract\xe9ristiques, influen\xe7ant la mani\xe8re dont elle \xe9claire les objets et produit des ombres. En appliquant le mod\xe8le d'\xe9clairage de Phong, qui combine les composantes diffuse, ambiante et sp\xe9culaire, j'ai pu obtenir un rendu lumineux cr\xe9dible."})]}),(0,i.jsxs)("div",{className:r.default.paragraph_100,children:[(0,i.jsx)("h4",{children:"3.3 Mat\xe9riaux et textures"}),(0,i.jsx)("p",{children:"Les mat\xe9riaux d\xe9terminent l\u2019apparence de surface des objets en contr\xf4lant des propri\xe9t\xe9s telles que la r\xe9flexion, la brillance et la texture. En utilisant des textures 2D, il est possible de simuler des d\xe9tails complexes comme des motifs ou des reliefs sans augmenter le nombre de polygones. J'ai int\xe9gr\xe9 la gestion des textures dans le fragment shader, permettant d\u2019associer des images \xe0 la surface des objets pour enrichir visuellement la sc\xe8ne."})]}),(0,i.jsx)("h3",{className:r.default.subtitle,children:"4. Techniques de projection d'ombre : Shadow Mapping"}),(0,i.jsxs)("div",{className:r.default.paragraph_50,children:[(0,i.jsx)("h4",{children:"4.1 Principe du Shadow Mapping"}),(0,i.jsx)("p",{children:'Le Shadow Mapping est une technique courante pour g\xe9n\xe9rer des ombres en temps r\xe9el. Elle repose sur l\'id\xe9e de capturer une "vue" de la sc\xe8ne depuis la source lumineuse et de stocker les distances des objets \xe0 cette lumi\xe8re dans une texture appel\xe9e Shadow Map. Lors du rendu final, cette Shadow Map est consult\xe9e pour d\xe9terminer si un pixel est ombrag\xe9 ou non, en comparant sa distance \xe0 la lumi\xe8re avec celle enregistr\xe9e dans la carte.'}),(0,i.jsx)("h4",{children:"4.2 Les d\xe9fis du Shadow Mapping"}),(0,i.jsx)("p",{children:"Bien que puissante, cette technique pr\xe9sente des d\xe9fis techniques, notamment les effets d'aliasing et le ph\xe9nom\xe8ne d'auto-ombrage (self-shadowing). Pour minimiser ces artefacts, j\u2019ai explor\xe9 des techniques d\u2019am\xe9lioration comme le filtrage bilin\xe9aire et la correction de biais. L\u2019optimisation de la r\xe9solution de la Shadow Map et l'ajustement du volume de projection sont \xe9galement des points cl\xe9s pour obtenir des ombres nettes et pr\xe9cises."})]}),(0,i.jsx)("div",{className:r.default.paragraph_50,children:(0,i.jsx)("img",{className:r.default.paragraph_100,src:"/alex67u/data/images/ShadowMap.png",alt:"ShadowMap.png"})}),(0,i.jsx)("div",{className:r.default.paragraph_100}),(0,i.jsxs)("div",{className:r.default.paragraph_100,children:[(0,i.jsx)("h4",{children:"4.3 Les applications du Shadow Mapping"}),(0,i.jsx)("p",{children:"Le Shadow Mapping est largement utilis\xe9 dans les jeux vid\xe9o et les simulations pour donner un aspect r\xe9aliste aux environnements 3D. Gr\xe2ce \xe0 l'exp\xe9rience acquise en impl\xe9mentant cette technique, j'ai pu mieux comprendre comment les ombres contribuent \xe0 la perception de la profondeur et du volume dans une sc\xe8ne. Cela m'a \xe9galement permis d'explorer des concepts avanc\xe9s comme les ombres dynamiques et la gestion des sources de lumi\xe8re multiples."})]}),(0,i.jsx)("h3",{className:r.default.subtitle,children:"5. Liens des sites utilis\xe9s"}),(0,i.jsxs)("div",{className:r.default.paragraph_100,children:[(0,i.jsx)("p",{children:"Voici quelques ressources en ligne qui m'ont \xe9t\xe9 particuli\xe8rement utiles pour mener \xe0 bien ce projet :"}),(0,i.jsxs)("ul",{children:[(0,i.jsxs)("li",{children:[(0,i.jsx)("a",{href:"https://www.opengl.org/",target:"_blank",children:"OpenGL"})," Le site officielle qui dispose d\xe9j\xe0 d'une tr\xe8s bonne docummentation."]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("a",{href:"https://learnopengl.com/",target:"_blank",children:"LearnOpenGL"})," - Un excellent site pour apprendre les bases d'OpenGL avec des tutoriels d\xe9taill\xe9s sur les shaders, l'\xe9clairage et les techniques de rendu avanc\xe9es."]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("a",{href:"https://www.opengl-tutorial.org/",target:"_blank",children:"OpenGL Tutorial"})," - Une autre ressource de qualit\xe9 pour des tutoriels pas \xe0 pas sur la programmation 3D avec OpenGL."]})]})]})]})},3051:(e,a,s)=>{s.d(a,{A:()=>i});s(5043);var r=s(1175),t=s(579);const i=e=>{let{filePath:a}=e;return(0,t.jsx)("div",{className:r.A.videoContainer,children:(0,t.jsxs)("video",{className:r.A.video,controls:!0,children:[(0,t.jsx)("source",{src:a,type:"video/mp4"}),"Votre navigateur ne supporte pas la balise vid\xe9o."]})})}},4479:(e,a,s)=>{s.r(a),s.d(a,{default:()=>r});const r={article:"Article_article__+gNQy",subtitle:"Article_subtitle__lXQXQ",paragraph_50:"Article_paragraph_50__pJ95J",padding1em:"Article_padding1em__kEm6Q",paragraph_100:"Article_paragraph_100__LJbdS",margincontent:"Article_margincontent__+cw48",maxcontent:"Article_maxcontent__umvPg",list:"Article_list__KhP-C"}},1175:(e,a,s)=>{s.d(a,{A:()=>r});const r={videoContainer:"videoMP4_videoContainer__jR5fp",video:"videoMP4_video__LG6aT"}}}]);
//# sourceMappingURL=240.ef0768d9.chunk.js.map