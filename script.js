const screenButtons = document.querySelectorAll("[data-screen]");
const shortcutButtons = document.querySelectorAll("[data-target]");
const screens = document.querySelectorAll(".screen");
const appTopbar = document.getElementById("app-topbar");
const screenTitle = document.getElementById("screen-title");
const loginForm = document.getElementById("login-form");
const loginEmail = document.getElementById("login-email");
const loginPassword = document.getElementById("login-password");
const registerForm = document.getElementById("register-form");
const registerName = document.getElementById("register-name");
const registerEmail = document.getElementById("register-email");
const registerPassword = document.getElementById("register-password");
const registerPasswordConfirm = document.getElementById("register-password-confirm");
const logoutButton = document.getElementById("logout-button");
const profileAvatar = document.getElementById("profile-avatar");
const profileName = document.getElementById("profile-name");
const profileStatus = document.getElementById("profile-status");
const profileEmail = document.getElementById("profile-email");
const homeKicker = document.getElementById("home-kicker");
const cerfaPreviewName = document.getElementById("cerfa-preview-name");
const permitChoiceModal = document.getElementById("permit-choice-modal");
const permitChoiceYes = document.getElementById("permit-choice-yes");
const permitChoiceNo = document.getElementById("permit-choice-no");
const antsChoiceYes = document.getElementById("ants-choice-yes");
const antsChoiceNo = document.getElementById("ants-choice-no");

const departementsPrefectures = [
  { code: "01", departement: "Ain", prefecture: "Bourg-en-Bresse" },
  { code: "02", departement: "Aisne", prefecture: "Laon" },
  { code: "03", departement: "Allier", prefecture: "Moulins" },
  { code: "04", departement: "Alpes-de-Haute-Provence", prefecture: "Digne-les-Bains" },
  { code: "05", departement: "Hautes-Alpes", prefecture: "Gap" },
  { code: "06", departement: "Alpes-Maritimes", prefecture: "Nice" },
  { code: "07", departement: "Ardeche", prefecture: "Privas" },
  { code: "08", departement: "Ardennes", prefecture: "Charleville-Mezieres" },
  { code: "09", departement: "Ariege", prefecture: "Foix" },
  { code: "10", departement: "Aube", prefecture: "Troyes" },
  { code: "11", departement: "Aude", prefecture: "Carcassonne" },
  { code: "12", departement: "Aveyron", prefecture: "Rodez" },
  { code: "13", departement: "Bouches-du-Rhone", prefecture: "Marseille" },
  { code: "14", departement: "Calvados", prefecture: "Caen" },
  { code: "15", departement: "Cantal", prefecture: "Aurillac" },
  { code: "16", departement: "Charente", prefecture: "Angouleme" },
  { code: "17", departement: "Charente-Maritime", prefecture: "La Rochelle" },
  { code: "18", departement: "Cher", prefecture: "Bourges" },
  { code: "19", departement: "Correze", prefecture: "Tulle" },
  { code: "2A", departement: "Corse-du-Sud", prefecture: "Ajaccio" },
  { code: "2B", departement: "Haute-Corse", prefecture: "Bastia" },
  { code: "21", departement: "Cote-d'Or", prefecture: "Dijon" },
  { code: "22", departement: "Cotes-d'Armor", prefecture: "Saint-Brieuc" },
  { code: "23", departement: "Creuse", prefecture: "Gueret" },
  { code: "24", departement: "Dordogne", prefecture: "Perigueux" },
  { code: "25", departement: "Doubs", prefecture: "Besancon" },
  { code: "26", departement: "Drome", prefecture: "Valence" },
  { code: "27", departement: "Eure", prefecture: "Evreux" },
  { code: "28", departement: "Eure-et-Loir", prefecture: "Chartres" },
  { code: "29", departement: "Finistere", prefecture: "Quimper" },
  { code: "30", departement: "Gard", prefecture: "Nimes" },
  { code: "31", departement: "Haute-Garonne", prefecture: "Toulouse" },
  { code: "32", departement: "Gers", prefecture: "Auch" },
  { code: "33", departement: "Gironde", prefecture: "Bordeaux" },
  { code: "34", departement: "Herault", prefecture: "Montpellier" },
  { code: "35", departement: "Ille-et-Vilaine", prefecture: "Rennes" },
  { code: "36", departement: "Indre", prefecture: "Chateauroux" },
  { code: "37", departement: "Indre-et-Loire", prefecture: "Tours" },
  { code: "38", departement: "Isere", prefecture: "Grenoble" },
  { code: "39", departement: "Jura", prefecture: "Lons-le-Saunier" },
  { code: "40", departement: "Landes", prefecture: "Mont-de-Marsan" },
  { code: "41", departement: "Loir-et-Cher", prefecture: "Blois" },
  { code: "42", departement: "Loire", prefecture: "Saint-Etienne" },
  { code: "43", departement: "Haute-Loire", prefecture: "Le Puy-en-Velay" },
  { code: "44", departement: "Loire-Atlantique", prefecture: "Nantes" },
  { code: "45", departement: "Loiret", prefecture: "Orleans" },
  { code: "46", departement: "Lot", prefecture: "Cahors" },
  { code: "47", departement: "Lot-et-Garonne", prefecture: "Agen" },
  { code: "48", departement: "Lozere", prefecture: "Mende" },
  { code: "49", departement: "Maine-et-Loire", prefecture: "Angers" },
  { code: "50", departement: "Manche", prefecture: "Saint-Lo" },
  { code: "51", departement: "Marne", prefecture: "Chalons-en-Champagne" },
  { code: "52", departement: "Haute-Marne", prefecture: "Chaumont" },
  { code: "53", departement: "Mayenne", prefecture: "Laval" },
  { code: "54", departement: "Meurthe-et-Moselle", prefecture: "Nancy" },
  { code: "55", departement: "Meuse", prefecture: "Bar-le-Duc" },
  { code: "56", departement: "Morbihan", prefecture: "Vannes" },
  { code: "57", departement: "Moselle", prefecture: "Metz" },
  { code: "58", departement: "Nievre", prefecture: "Nevers" },
  { code: "59", departement: "Nord", prefecture: "Lille" },
  { code: "60", departement: "Oise", prefecture: "Beauvais" },
  { code: "61", departement: "Orne", prefecture: "Alencon" },
  { code: "62", departement: "Pas-de-Calais", prefecture: "Arras" },
  { code: "63", departement: "Puy-de-Dome", prefecture: "Clermont-Ferrand" },
  { code: "64", departement: "Pyrenees-Atlantiques", prefecture: "Pau" },
  { code: "65", departement: "Hautes-Pyrenees", prefecture: "Tarbes" },
  { code: "66", departement: "Pyrenees-Orientales", prefecture: "Perpignan" },
  { code: "67", departement: "Bas-Rhin", prefecture: "Strasbourg" },
  { code: "68", departement: "Haut-Rhin", prefecture: "Colmar" },
  { code: "69", departement: "Rhone", prefecture: "Lyon" },
  { code: "70", departement: "Haute-Saone", prefecture: "Vesoul" },
  { code: "71", departement: "Saone-et-Loire", prefecture: "Macon" },
  { code: "72", departement: "Sarthe", prefecture: "Le Mans" },
  { code: "73", departement: "Savoie", prefecture: "Chambery" },
  { code: "74", departement: "Haute-Savoie", prefecture: "Annecy" },
  { code: "75", departement: "Paris", prefecture: "Paris" },
  { code: "76", departement: "Seine-Maritime", prefecture: "Rouen" },
  { code: "77", departement: "Seine-et-Marne", prefecture: "Melun" },
  { code: "78", departement: "Yvelines", prefecture: "Versailles" },
  { code: "79", departement: "Deux-Sevres", prefecture: "Niort" },
  { code: "80", departement: "Somme", prefecture: "Amiens" },
  { code: "81", departement: "Tarn", prefecture: "Albi" },
  { code: "82", departement: "Tarn-et-Garonne", prefecture: "Montauban" },
  { code: "83", departement: "Var", prefecture: "Toulon" },
  { code: "84", departement: "Vaucluse", prefecture: "Avignon" },
  { code: "85", departement: "Vendee", prefecture: "La Roche-sur-Yon" },
  { code: "86", departement: "Vienne", prefecture: "Poitiers" },
  { code: "87", departement: "Haute-Vienne", prefecture: "Limoges" },
  { code: "88", departement: "Vosges", prefecture: "Epinal" },
  { code: "89", departement: "Yonne", prefecture: "Auxerre" },
  { code: "90", departement: "Territoire de Belfort", prefecture: "Belfort" },
  { code: "91", departement: "Essonne", prefecture: "Evry-Courcouronnes" },
  { code: "92", departement: "Hauts-de-Seine", prefecture: "Nanterre" },
  { code: "93", departement: "Seine-Saint-Denis", prefecture: "Bobigny" },
  { code: "94", departement: "Val-de-Marne", prefecture: "Creteil" },
  { code: "95", departement: "Val-d'Oise", prefecture: "Cergy" },
  { code: "971", departement: "Guadeloupe", prefecture: "Basse-Terre" },
  { code: "972", departement: "Martinique", prefecture: "Fort-de-France" },
  { code: "973", departement: "Guyane", prefecture: "Cayenne" },
  { code: "974", departement: "La Reunion", prefecture: "Saint-Denis" },
  { code: "976", departement: "Mayotte", prefecture: "Mamoudzou" },
];

const departementSelect = document.getElementById("departement-select");
const prefectureSelect = document.getElementById("prefecture-select");
const parcoursTimeline = document.getElementById("parcours-timeline");
const parcoursDetailStack = document.getElementById("parcours-detail-stack");
const medecinSearchToggle = document.getElementById("medecin-search-toggle");
const medecinSearchBox = document.getElementById("medecin-search-box");
const medecinSearchInput = document.getElementById("medecin-search-input");
const medecinResults = document.getElementById("medecin-results");
const notificationsToggle = document.getElementById("notifications-toggle");
const agendaToggle = document.getElementById("agenda-toggle");
const dossierAddMesDocumentsButton = document.getElementById("dossier-add-mes-documents");
const dossierAddIdentiteButton = document.getElementById("dossier-add-identite");
const dossierAddAutresButton = document.getElementById("dossier-add-autres");
const dossierUploadList = document.getElementById("dossier-upload-list");
const dossierUploadModal = document.getElementById("dossier-upload-modal");
const dossierUploadModalClose = document.getElementById("dossier-upload-modal-close");
const dossierUploadModalTitle = document.getElementById("dossier-upload-modal-title");
const dossierUploadModalCopy = document.getElementById("dossier-upload-modal-copy");
const dossierUploadChoiceList = document.getElementById("dossier-upload-choice-list");
const dossierUploadChoiceButtons = document.querySelectorAll("[data-dossier-choice]");
const dossierUploadSelectedTarget = document.getElementById("dossier-upload-selected-target");
const dossierUploadModalSurface = document.getElementById("dossier-upload-modal-surface");
const dossierModalDropzone = document.getElementById("dossier-modal-dropzone");
const dossierModalBrowseButton = document.getElementById("dossier-modal-browse-button");
const dossierModalFileInput = document.getElementById("dossier-modal-file-input");
const openPreparationModalButton = document.getElementById("open-preparation-modal");
const dossierDocumentsText = document.getElementById("dossier-documents-text");
const dossierDocumentsStatus = document.getElementById("dossier-documents-status");
const dossierIdentiteText = document.getElementById("dossier-identite-text");
const dossierIdentiteStatus = document.getElementById("dossier-identite-status");
const dossierCerfaText = document.getElementById("dossier-cerfa-text");
const dossierCerfaStatus = document.getElementById("dossier-cerfa-status");
const dossierQuestionnaireText = document.getElementById("dossier-questionnaire-text");
const dossierQuestionnaireStatus = document.getElementById("dossier-questionnaire-status");
const dossierAutresText = document.getElementById("dossier-autres-text");
const dossierAutresStatus = document.getElementById("dossier-autres-status");
const dossierProgressLabel = document.getElementById("dossier-progress-label");
const dossierProgressFill = document.getElementById("dossier-progress-fill");
const medecinProgressLabel = document.getElementById("medecin-progress-label");
const medecinProgressFill = document.getElementById("medecin-progress-fill");
const preparationProgressLabel = document.getElementById("preparation-progress-label");
const preparationProgressFill = document.getElementById("preparation-progress-fill");
const controleProgressLabel = document.getElementById("controle-progress-label");
const controleProgressFill = document.getElementById("controle-progress-fill");
const avisProgressLabel = document.getElementById("avis-progress-label");
const avisProgressFill = document.getElementById("avis-progress-fill");
const decisionProgressLabel = document.getElementById("decision-progress-label");
const decisionProgressFill = document.getElementById("decision-progress-fill");
const documentModal = document.getElementById("document-modal");
const documentModalClose = document.getElementById("document-modal-close");
const documentModalTitle = document.getElementById("document-modal-title");
const documentModalCopy = document.getElementById("document-modal-copy");
const documentModalItems = document.querySelectorAll(".modal-document-item");
const prepCardCerfa = document.getElementById("prep-card-cerfa");
const dossierCerfaCard = document.getElementById("dossier-cerfa-card");
const cerfaPreview = document.getElementById("cerfa-preview");
const cerfaPreviewClose = document.getElementById("cerfa-preview-close");
const openCerfaFill = document.getElementById("open-cerfa-fill");
const dossierQuestionnaireCard = document.getElementById("dossier-questionnaire-card");
const openQuestionnaireFill = document.getElementById("open-questionnaire-fill");
const questionnairePreview = document.getElementById("questionnaire-preview");
const questionnairePreviewClose = document.getElementById("questionnaire-preview-close");
const decisionCardAnts = document.getElementById("decision-card-ants");
const decisionCardAntsIcon = document.getElementById("decision-card-ants-icon");
const decisionCardGracieux = document.getElementById("decision-card-gracieux");
const decisionCardGracieuxIcon = document.getElementById("decision-card-gracieux-icon");
const decisionCardContentieux = document.getElementById("decision-card-contentieux");
const decisionCardContentieuxIcon = document.getElementById("decision-card-contentieux-icon");
const controleHelperText = document.getElementById("controle-helper-text");
const skipControleStep = document.getElementById("skip-controle-step");
const validateControleStep = document.getElementById("validate-controle-step");
const controleFollowup = document.getElementById("controle-followup");
const controleFollowupCount = document.getElementById("controle-followup-count");
const controleFollowupCopy = document.getElementById("controle-followup-copy");
const controleFollowupList = document.getElementById("controle-followup-list");
const parcoursStepBadge = document.getElementById("parcours-step-badge");
const homeProcedureStatus = document.getElementById("home-procedure-status");
const homeProcedureCount = document.getElementById("home-procedure-count");
const homeProcedureTrack = document.getElementById("home-procedure-track");
const homeProcedureAction1 = document.getElementById("home-procedure-action-1");
const homeProcedureAction2 = document.getElementById("home-procedure-action-2");
const documentToast = document.getElementById("document-toast");
const backToTopButton = document.getElementById("back-to-top-button");
const checklistCount = document.getElementById("checklist-count");
const checklistCaption = document.getElementById("checklist-caption");
const checklistItems = {
  identite: {
    item: document.getElementById("check-piece-identite"),
    status: document.getElementById("check-piece-identite-status"),
  },
  questionnaire: {
    item: document.getElementById("check-questionnaire"),
    status: document.getElementById("check-questionnaire-status"),
  },
  cerfa: {
    item: document.getElementById("check-cerfa"),
    status: document.getElementById("check-cerfa-status"),
  },
  medical: {
    item: document.getElementById("check-document-medical"),
    status: document.getElementById("check-document-medical-status"),
  },
};

let displayedDepartements = [...departementsPrefectures];
let currentParcoursStep = "declaration";
let currentDocumentFlow = "dossier";
let documentToastTimeout;
let controleStepSkipped = false;
let controleStepValidated = false;
let medecinSearchQuery = "";
let selectedMedecinId = "";
let medecinStepComplete = false;
let selectedAvisKey = "";
let isAuthenticated = false;
let uploadedFileEntries = [];
let currentUser = null;
let currentDossierUploadCategory = "";

const prototypeAccountsStorageKey = "light4lifePrototypeAccounts";
const prototypeSessionStorageKey = "light4lifePrototypeCurrentUser";
const prototypeProgressStorageKey = "light4lifePrototypeProgress";
const defaultPrototypeAccounts = [
  {
    name: "Hortense Bonjour",
    email: "hortense@email.fr",
    password: "bonjour123",
    hasDrivingLicense: true,
    hasAntsAccount: true,
  },
];

const dossierUploadCategoryDefinitions = {
  neurologue: {
    label: "Compte-rendu neurologique",
    bucket: "mes-documents",
    bucketLabel: "Mes documents",
    linkedKeys: ["neurologue"],
  },
  examens: {
    label: "EEG / IRM",
    bucket: "mes-documents",
    bucketLabel: "Mes documents",
    linkedKeys: ["examens"],
  },
  historique: {
    label: "Historique medical",
    bucket: "mes-documents",
    bucketLabel: "Mes documents",
    linkedKeys: ["crises", "traitement", "traitement-cours"],
  },
  identite: {
    label: "Piece d'identite",
    bucket: "identite",
    bucketLabel: "Carte d'identite",
    preparationKey: "identite",
  },
  cerfa: {
    label: "CERFA",
    bucket: "cerfa",
    bucketLabel: "Formulaire CERFA",
    preparationKey: "cerfa",
  },
  questionnaire: {
    label: "Questionnaire de sante",
    bucket: "questionnaire",
    bucketLabel: "Questionnaire de sante",
    preparationKey: "questionnaire",
  },
  autres: {
    label: "Autres",
    bucket: "autres",
    bucketLabel: "Autres",
  },
};

const dossierDocumentDefinitions = [
  {
    key: "neurologue",
    title: "Compte-rendu(s) du neurologue",
    card: document.getElementById("doc-card-neurologue"),
  },
  {
    key: "crises",
    title: "Historique des crises",
    card: document.getElementById("doc-card-crises"),
  },
  {
    key: "traitement",
    title: "Historique du traitement medicamenteux",
    card: document.getElementById("doc-card-traitement"),
  },
  {
    key: "traitement-cours",
    title: "Traitement en cours",
    card: document.getElementById("doc-card-traitement-cours"),
  },
  {
    key: "examens",
    title: "Examens EEG et IRM",
    card: document.getElementById("doc-card-examens"),
  },
];

const preparationDocumentDefinitions = [
  {
    key: "cerfa",
    title: "CERFA 14880",
    card: document.getElementById("prep-card-cerfa"),
  },
  {
    key: "questionnaire",
    title: "Questionnaire sur l'etat de sante",
    card: document.getElementById("prep-card-questionnaire"),
  },
  {
    key: "identite",
    title: "Piece d'identite",
    card: document.getElementById("prep-card-identite"),
  },
  {
    key: "permis",
    title: "Permis de conduire",
    card: document.getElementById("prep-card-permis"),
  },
];

const requiredPreparationKeys = ["cerfa", "questionnaire", "identite"];
const preparationLabels = {
  cerfa: "CERFA 14880",
  questionnaire: "Questionnaire sur l'etat de sante",
  identite: "Carte d'identite",
  permis: "Permis de conduire",
};

const controleDocumentDefinitions = [
  { key: "examens", card: document.getElementById("controle-card-examens") },
  { key: "specialistes", card: document.getElementById("controle-card-specialistes") },
  { key: "commission", card: document.getElementById("controle-card-commission") },
  { key: "conduite", card: document.getElementById("controle-card-conduite") },
];

const avisDefinitions = [
  { key: "apte", card: document.getElementById("avis-card-apte") },
  { key: "temporaire", card: document.getElementById("avis-card-temporaire") },
  { key: "restrictions", card: document.getElementById("avis-card-restrictions") },
  { key: "refus", card: document.getElementById("avis-card-refus") },
];
const favorableAvisKeys = new Set(["apte", "temporaire", "restrictions"]);

const controleFollowupDefinitions = {
  examens: {
    stepTitle: "Examens complementaires",
    title: "Examens complementaires a suivre",
    description: "Planifier les examens demandes et ajouter les resultats quand ils sont disponibles.",
    homeLabel: "Suivre les examens complementaires",
    cardLabel: "Programmer les examens demandes et centraliser les resultats.",
    items: [
      "EEG supplementaires",
      "IRM complementaire",
      "Scanner cerebral",
      "Analyse sanguine",
      "Dosage des medicaments",
      "Bilan neurologique complementaire",
    ],
  },
  specialistes: {
    stepTitle: "Avis de specialistes",
    title: "Avis de specialistes a reunir",
    description: "Centraliser les avis ou recommandations des specialistes demandes pour le dossier.",
    homeLabel: "Ajouter les avis de specialistes",
    cardLabel: "Recuperer les comptes-rendus ou recommandations des specialistes sollicites.",
  },
  commission: {
    stepTitle: "Commission medicale",
    title: "Commission medicale a preparer",
    description: "Preparer les pieces utiles avant le passage en commission medicale.",
    homeLabel: "Preparer la commission medicale",
    cardLabel: "Verifier les pieces utiles avant le passage en commission medicale.",
  },
  conduite: {
    stepTitle: "Test de conduite",
    title: "Test de conduite a anticiper",
    description: "Organiser les elements pratiques utiles si un test de conduite est requis.",
    homeLabel: "Organiser le test de conduite",
    cardLabel: "Anticiper les modalites utiles si un test de conduite est demande.",
  },
};

const uploadedDocumentKeys = new Set();
const uploadedPreparationKeys = new Set();
const controleSelection = new Set();

const medecinFirstNames = ["Claire", "Martin", "Sarah", "Louis", "Nina", "Thomas", "Emma", "Hugo"];
const medecinLastNames = ["Dupont", "Bernard", "Moreau", "Garcia", "Petit", "Lambert", "Roux", "Fontaine"];
const staticParcoursSteps = ["declaration", "dossier", "medecin", "preparation", "controle", "avis", "decision"];

function getParcoursSteps() {
  return document.querySelectorAll("[data-parcours-step]");
}

function getParcoursPanels() {
  return document.querySelectorAll("[data-parcours-panel]");
}

function getControleFollowupKeys() {
  return controleStepValidated && !controleStepSkipped ? [...controleSelection] : [];
}

function getFollowupStepName(key) {
  return `controle-suivi-${key}`;
}

function isFollowupStep(stepName) {
  return stepName.startsWith("controle-suivi-");
}

function getFollowupKeyFromStep(stepName) {
  return stepName.replace("controle-suivi-", "");
}

function getParcoursOrder() {
  const followupSteps = getControleFollowupKeys().map((key) => getFollowupStepName(key));
  return ["declaration", "dossier", "medecin", "preparation", "controle", ...followupSteps, "avis", "decision"];
}

function getStepDisplayLabel(stepName) {
  if (isFollowupStep(stepName)) {
    const config = controleFollowupDefinitions[getFollowupKeyFromStep(stepName)];
    return config?.stepTitle || "Suivi complementaire";
  }

  const labels = {
    declaration: "Declaration lors de l'inscription",
    dossier: "Construction du dossier personnel",
    medecin: "Choix d'un medecin agree",
    preparation: "Preparation du dossier medical-administratif",
    controle: "Controle medical d'aptitude",
    avis: "Avis medical",
    decision: "Decision prefectorale et recours",
  };

  return labels[stepName] || stepName;
}

function renderDynamicControleSteps() {
  if (!parcoursTimeline || !parcoursDetailStack) {
    return;
  }

  parcoursTimeline.querySelectorAll(".dynamic-followup-step").forEach((step) => step.remove());
  parcoursDetailStack.querySelectorAll(".dynamic-followup-panel").forEach((panel) => panel.remove());

  const avisStep = parcoursTimeline.querySelector('[data-parcours-step="avis"]');
  const avisPanel = parcoursDetailStack.querySelector('[data-parcours-panel="avis"]');
  const followupKeys = getControleFollowupKeys();

  followupKeys.forEach((key, index) => {
    const config = controleFollowupDefinitions[key];

    if (!config || !avisStep || !avisPanel) {
      return;
    }

    const stepName = getFollowupStepName(key);
    const stepButton = document.createElement("button");
    stepButton.type = "button";
    stepButton.className = "timeline-step dynamic-followup-step";
    stepButton.dataset.parcoursStep = stepName;
    stepButton.innerHTML = `
      <span></span>
      <div>
        <strong>${config.stepTitle}</strong>
      </div>
    `;
    parcoursTimeline.insertBefore(stepButton, avisStep);

    const panel = document.createElement("section");
    panel.className = "panel parcours-detail dynamic-followup-panel";
    panel.dataset.parcoursPanel = stepName;
    const adminDocs = [
      uploadedDocumentKeys.has("examens") ? "EEG et IRM" : null,
      uploadedDocumentKeys.has("neurologue") ? "Compte-rendu neurologique" : null,
      (uploadedDocumentKeys.has("crises") ||
        uploadedDocumentKeys.has("traitement") ||
        uploadedDocumentKeys.has("traitement-cours"))
        ? "Historique medical"
        : null,
    ].filter(Boolean);
    const buildAdminSection = (sectionKey, title, items, emptyText) => `
      <section class="followup-section">
        <div class="panel-head followup-section-head">
          <h5>${title}</h5>
          <span class="pill">Documents</span>
        </div>
        ${
          items.length
            ? `
              <div class="document-schedule">
                ${items
                  .map(
                    (itemLabel, itemIndex) => `
                      <button class="document-card ${["rose", "yellow", "blue", "mint", "lavender", "rose"][itemIndex % 6]} ${itemIndex > 0 ? "extra-item" : ""}" type="button" ${itemIndex > 0 ? "hidden" : ""} data-collapsible-item="${sectionKey}">
                        <span class="document-card-icon">${itemIndex + 1}</span>
                        <span class="document-card-copy">
                          <strong>${itemLabel}</strong>
                          <small>Document administratif deja disponible dans votre dossier.</small>
                        </span>
                        <span class="document-card-check"></span>
                      </button>
                    `,
                  )
                  .join("")}
              </div>
            `
            : `
              <div class="stack-list followup-card-list">
                <article class="list-card form-list-card followup-list-card">
                  <div>
                    <strong>${emptyText}</strong>
                  </div>
                  <div class="form-card-actions">
                    <span class="status-chip soft">Vide</span>
                  </div>
                </article>
              </div>
            `
        }
        ${items.length > 1 ? `<div class="followup-section-footer"><button class="link-button follow-pill" type="button" data-collapsible-toggle="${sectionKey}">Voir tout</button></div>` : ""}
      </section>
    `;
    const buildExamSection = (sectionKey, title, items) => `
      <section class="followup-section">
        <div class="panel-head followup-section-head">
          <h5>${title}</h5>
          <span class="pill">Examens</span>
        </div>
        <div class="document-schedule">
          ${items
            .map(
              (itemLabel, itemIndex) => `
                <button class="document-card ${["rose", "yellow", "blue", "mint", "lavender", "rose"][itemIndex % 6]} ${itemIndex > 0 ? "extra-item" : ""}" type="button" ${itemIndex > 0 ? "hidden" : ""} data-collapsible-item="${sectionKey}">
                  <span class="document-card-icon">${itemIndex + 1}</span>
                  <span class="document-card-copy">
                    <strong>${itemLabel}</strong>
                    <small>Ajouter les resultats ou les elements utiles pour cet examen.</small>
                  </span>
                  <span class="document-card-check"></span>
                </button>
              `,
            )
            .join("")}
        </div>
        ${items.length > 1 ? `<div class="followup-section-footer"><button class="link-button follow-pill" type="button" data-collapsible-toggle="${sectionKey}">Voir tout</button></div>` : ""}
      </section>
    `;
    const detailCards = key === "examens"
      ? `
        <div class="followup-sections">
          ${buildAdminSection(
            `${stepName}-admin`,
            "Documents administratifs deja presents",
            adminDocs,
            "Aucun document administratif disponible pour le moment.",
          )}
          ${buildExamSection(
            `${stepName}-examens`,
            "Documents a rajouter",
            config.items || [],
          )}
        </div>
      `
      : config.items?.length
      ? `
        <div class="document-schedule">
          ${config.items
            .map(
              (itemLabel, itemIndex) => `
                <button class="document-card ${["rose", "yellow", "blue", "mint", "lavender", "rose"][itemIndex % 6]}" type="button">
                  <span class="document-card-icon">${itemIndex + 1}</span>
                  <span class="document-card-copy">
                    <strong>${itemLabel}</strong>
                    <small>Ajouter les resultats ou les elements utiles pour cet examen.</small>
                  </span>
                  <span class="document-card-check"></span>
                </button>
              `,
            )
            .join("")}
        </div>
      `
      : `
        <div class="stack-list compact">
          <article class="list-card">
            <div>
              <strong>${config.title}</strong>
              <p>${config.cardLabel}</p>
            </div>
            <span class="medecin-card-badge">Etape ${index + 1}</span>
          </article>
        </div>
      `;
    panel.innerHTML = `
      <div class="panel-head">
        <h4>${config.stepTitle}</h4>
        <span class="pill">Debloque</span>
      </div>
      <p class="step-helper-text">
        Cette etape s'est debloquee apres la validation du controle medical d'aptitude.
      </p>
      <div class="mini-progress">
        <div class="mini-progress-head">
          <span>Progression de l'etape</span>
          <strong>0%</strong>
        </div>
        <div class="mini-progress-track" aria-hidden="true">
          <span class="mini-progress-fill" style="width: 0%"></span>
        </div>
      </div>
      ${detailCards}
    `;
    parcoursDetailStack.insertBefore(panel, avisPanel);
  });

  if (isFollowupStep(currentParcoursStep)) {
    const key = getFollowupKeyFromStep(currentParcoursStep);

    if (!followupKeys.includes(key)) {
      currentParcoursStep = "controle";
    }
  }
}

function renderHomeTrack(totalSteps, currentIndex) {
  if (!homeProcedureTrack) {
    return;
  }

  const trackWidth = Math.max(136, totalSteps * 26);
  const progressWidth = totalSteps > 1
    ? ((currentIndex - 1) / (totalSteps - 1)) * trackWidth
    : trackWidth;

  homeProcedureTrack.style.setProperty("--track-width", `${trackWidth}px`);
  homeProcedureTrack.style.setProperty("--track-progress-width", `${progressWidth}px`);
  homeProcedureTrack.innerHTML = "";

  for (let index = 1; index <= totalSteps; index += 1) {
    const step = document.createElement("span");
    step.className = "track-step";

    if (index === currentIndex) {
      step.classList.add("current");
    }

    homeProcedureTrack.appendChild(step);
  }
}

function buildMedecinsForPrefecture(prefecture) {
  const seed = prefecture
    .split("")
    .reduce((total, char) => total + char.charCodeAt(0), 0);

  return [0, 1].map((index) => {
    const firstName = medecinFirstNames[(seed + index * 2) % medecinFirstNames.length];
    const lastName = medecinLastNames[(seed + index * 3) % medecinLastNames.length];
    const variant = index === 0
      ? "Disponibilite rapide, accessibilite PMR et prise de rendez-vous simplifiee."
      : "Proximite avec la prefecture, horaires et contact direct du cabinet.";

    return {
      id: `${prefecture}-${index}`,
      name: `Dr ${firstName} ${lastName}`,
      description: `${prefecture} : ${variant}`,
      searchText: `${prefecture} dr ${firstName} ${lastName} ${variant}`.toLowerCase(),
    };
  });
}

function renderMedecins() {
  if (!medecinResults || !prefectureSelect) {
    return;
  }

  const prefecture = prefectureSelect.value || "";
  const medecins = buildMedecinsForPrefecture(prefecture).filter((medecin) =>
    medecinSearchQuery ? medecin.searchText.includes(medecinSearchQuery) : true,
  );

  if (medecins.length === 0) {
    medecinResults.innerHTML = `
      <article class="list-card">
        <div>
          <strong>Aucun medecin trouve</strong>
          <p>Essayez un autre nom, departement ou prefecture.</p>
        </div>
      </article>
    `;
    return;
  }

  medecinResults.innerHTML = medecins
    .map(
      (medecin) => `
        <article class="list-card medecin-card ${selectedMedecinId === medecin.id ? "selected" : ""}" data-medecin-id="${medecin.id}">
          <div>
            <strong>${medecin.name}</strong>
            <p>${medecin.description}</p>
          </div>
          <span class="medecin-card-badge">${selectedMedecinId === medecin.id ? "Selectionne" : "Choisir"}</span>
        </article>
      `,
    )
    .join("");

  medecinResults.querySelectorAll("[data-medecin-id]").forEach((card) => {
    card.addEventListener("click", () => {
      selectedMedecinId = card.dataset.medecinId;
      medecinStepComplete = true;
      renderMedecins();
      showDocumentToast("Le medecin a ete selectionne.");
      setParcoursStep("preparation");
    });
  });
}

function setActiveScreen(screenName) {
  if (!isAuthenticated && screenName !== "login") {
    return;
  }

  screens.forEach((screen) => {
    screen.classList.toggle("active", screen.id === `screen-${screenName}`);
  });

  screenButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.screen === screenName);
  });
}

function loadPrototypeAccounts() {
  try {
    const stored = window.localStorage.getItem(prototypeAccountsStorageKey);
    const sanitizeAccounts = (accounts) =>
      accounts.filter(
        (account) =>
          account.email?.toLowerCase() !== "marie@email.fr" &&
          account.name?.toLowerCase() !== "marie bonjour",
      );

    if (!stored) {
      const sanitizedDefaults = sanitizeAccounts([...defaultPrototypeAccounts]);
      window.localStorage.setItem(
        prototypeAccountsStorageKey,
        JSON.stringify(sanitizedDefaults),
      );
      return sanitizedDefaults;
    }

    const parsed = JSON.parse(stored);
    const sanitizedAccounts = Array.isArray(parsed) && parsed.length
      ? sanitizeAccounts(parsed)
      : sanitizeAccounts([...defaultPrototypeAccounts]);

    if (Array.isArray(parsed) && JSON.stringify(parsed) !== JSON.stringify(sanitizedAccounts)) {
      window.localStorage.setItem(prototypeAccountsStorageKey, JSON.stringify(sanitizedAccounts));
    }

    return sanitizedAccounts;
  } catch {
    return [...defaultPrototypeAccounts];
  }
}

function savePrototypeAccounts(accounts) {
  window.localStorage.setItem(prototypeAccountsStorageKey, JSON.stringify(accounts));
}

function loadPrototypeProgressStates() {
  try {
    const stored = window.localStorage.getItem(prototypeProgressStorageKey);
    const parsed = stored ? JSON.parse(stored) : {};
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
}

function savePrototypeProgressStates(states) {
  window.localStorage.setItem(prototypeProgressStorageKey, JSON.stringify(states));
}

function resetSimulationState() {
  uploadedFileEntries = [];
  uploadedDocumentKeys.clear();
  uploadedPreparationKeys.clear();
  controleSelection.clear();
  controleStepSkipped = false;
  controleStepValidated = false;
  medecinSearchQuery = "";
  selectedMedecinId = "";
  medecinStepComplete = false;
  selectedAvisKey = "";
  currentParcoursStep = "declaration";
}

function saveCurrentUserProgress() {
  if (!isAuthenticated || !currentUser?.email) {
    return;
  }

  const allStates = loadPrototypeProgressStates();
  allStates[currentUser.email.toLowerCase()] = {
    uploadedFileEntries,
    uploadedDocumentKeys: [...uploadedDocumentKeys],
    uploadedPreparationKeys: [...uploadedPreparationKeys],
    controleSelection: [...controleSelection],
    controleStepSkipped,
    controleStepValidated,
    selectedMedecinId,
    medecinStepComplete,
    selectedAvisKey,
    currentParcoursStep,
  };
  savePrototypeProgressStates(allStates);
}

function loadCurrentUserProgress() {
  resetSimulationState();

  if (!currentUser?.email) {
    return;
  }

  const allStates = loadPrototypeProgressStates();
  const savedState = allStates[currentUser.email.toLowerCase()];

  if (!savedState) {
    return;
  }

  uploadedFileEntries = Array.isArray(savedState.uploadedFileEntries)
    ? savedState.uploadedFileEntries
    : [];
  (savedState.uploadedDocumentKeys || []).forEach((key) => uploadedDocumentKeys.add(key));
  (savedState.uploadedPreparationKeys || []).forEach((key) => uploadedPreparationKeys.add(key));
  (savedState.controleSelection || []).forEach((key) => controleSelection.add(key));
  controleStepSkipped = Boolean(savedState.controleStepSkipped);
  controleStepValidated = Boolean(savedState.controleStepValidated);
  selectedMedecinId = savedState.selectedMedecinId || "";
  medecinStepComplete = Boolean(savedState.medecinStepComplete);
  selectedAvisKey = savedState.selectedAvisKey || "";
  currentParcoursStep = savedState.currentParcoursStep || "declaration";
}

function hasDrivingLicenseChoice() {
  return typeof currentUser?.hasDrivingLicense === "boolean";
}

function hasDrivingLicense() {
  return currentUser?.hasDrivingLicense !== false;
}

function hasAntsAccountChoice() {
  return typeof currentUser?.hasAntsAccount === "boolean";
}

function hasAntsAccount() {
  return currentUser?.hasAntsAccount === true;
}

function persistCurrentUserUpdates() {
  if (!currentUser?.email) {
    return;
  }

  const accounts = loadPrototypeAccounts();
  const updatedAccounts = accounts.map((account) =>
    account.email.toLowerCase() === currentUser.email.toLowerCase()
      ? { ...account, ...currentUser }
      : account,
  );
  savePrototypeAccounts(updatedAccounts);
  window.localStorage.setItem(
    prototypeSessionStorageKey,
    JSON.stringify({ email: currentUser.email }),
  );
}

function closePermitChoiceModal() {
  permitChoiceModal?.setAttribute("hidden", "");
}

function openPermitChoiceModal() {
  permitChoiceModal?.removeAttribute("hidden");
}

function maybeCloseOnboardingQuiz() {
  if (hasDrivingLicenseChoice() && hasAntsAccountChoice()) {
    closePermitChoiceModal();
    renderAllDocumentSimulations();
  }
}

function renderPermitDependentUI() {
  const shouldShowPermitOption = hasDrivingLicense();
  const permitCard = document.getElementById("prep-card-permis");
  const conduiteCard = document.getElementById("controle-card-conduite");

  if (!shouldShowPermitOption) {
    uploadedPreparationKeys.delete("permis");
    controleSelection.delete("conduite");

    if (currentParcoursStep === "controle-suivi-conduite") {
      currentParcoursStep = "controle";
    }
  }

  if (permitCard) {
    permitCard.hidden = !shouldShowPermitOption;
  }

  if (conduiteCard) {
    conduiteCard.hidden = !shouldShowPermitOption;
  }
}

function renderDeclarationSteps() {
  const antsAccountStep = document.querySelector('[data-declaration-step="ants-account"]');
  const declarationSteps = document.querySelectorAll("[data-declaration-step]");

  if (antsAccountStep) {
    antsAccountStep.hidden = hasAntsAccount();
  }

  declarationSteps.forEach((step, index) => {
    if (step.hidden) {
      return;
    }

    const badge = step.querySelector("[data-declaration-index]");
    if (badge) {
      badge.textContent = `${index + 1 - [...declarationSteps].slice(0, index).filter((item) => item.hidden).length}`;
    }
  });
}

function getAvatarInitials(name) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() || "")
    .join("") || "MB";
}

function updateUserUI() {
  const displayName = currentUser?.name || "Hortense Bonjour";
  const displayEmail = currentUser?.email || "hortense@email.fr";
  const firstName = displayName.split(" ").filter(Boolean)[0] || displayName;
  const permitStatus = hasDrivingLicenseChoice()
    ? hasDrivingLicense()
      ? "Permis B adapte - dossier actif"
      : "Pas encore de permis - dossier actif"
    : "Situation permis a renseigner - dossier actif";

  if (screenTitle) {
    screenTitle.textContent = `Bonjour ${displayName}`;
  }

  if (homeKicker) {
    homeKicker.textContent = `Hello ${firstName} !`;
  }

  if (profileAvatar) {
    profileAvatar.textContent = getAvatarInitials(displayName);
  }

  if (profileName) {
    profileName.textContent = `Bonjour ${displayName}`;
  }

  if (profileStatus) {
    profileStatus.textContent = permitStatus;
  }

  if (profileEmail) {
    profileEmail.textContent = displayEmail;
  }

  if (cerfaPreviewName) {
    cerfaPreviewName.textContent = displayName;
  }
}

function setAuthenticationState(authenticated) {
  isAuthenticated = authenticated;

  if (appTopbar) {
    appTopbar.hidden = !authenticated;
  }

  if (!authenticated) {
    resetSimulationState();
    currentUser = null;
    window.localStorage.removeItem(prototypeSessionStorageKey);
    updateUserUI();
    setActiveScreen("login");
    return;
  }

  loadCurrentUserProgress();
  updateUserUI();
  setActiveScreen("home");
  closePermitChoiceModal();
  renderAllDocumentSimulations();
  setParcoursStep(currentParcoursStep);
}

function renderDepartements() {
  if (!departementSelect || !prefectureSelect) {
    return;
  }

  departementSelect.innerHTML = displayedDepartements
    .map(
      (item) =>
        `<option value="${item.code}">${item.code} - ${item.departement}</option>`,
    )
    .join("");

  const updatePrefecture = () => {
    const selected =
      displayedDepartements.find((item) => item.code === departementSelect.value) ||
      displayedDepartements[0];

    if (!selected) {
      prefectureSelect.innerHTML = `<option value="">Aucun resultat</option>`;
      return;
    }

    prefectureSelect.innerHTML = `<option value="${selected.prefecture}">${selected.prefecture}</option>`;
    renderMedecins();
  };

  if (displayedDepartements.some((item) => item.code === "75")) {
    departementSelect.value = "75";
  } else if (displayedDepartements[0]) {
    departementSelect.value = displayedDepartements[0].code;
  }

  updatePrefecture();
  departementSelect.onchange = updatePrefecture;
}

function setParcoursStep(stepName) {
  currentParcoursStep = stepName;

  getParcoursSteps().forEach((step) => {
    step.classList.toggle("active", step.dataset.parcoursStep === stepName);
  });

  getParcoursPanels().forEach((panel) => {
    panel.classList.toggle("active", panel.dataset.parcoursPanel === stepName);
  });
}

function setupMedecinSearch() {
  if (!medecinSearchToggle || !medecinSearchBox || !medecinSearchInput) {
    return;
  }

  medecinSearchToggle.addEventListener("click", () => {
    const isOpen = !medecinSearchBox.hasAttribute("hidden");

    if (isOpen) {
      medecinSearchBox.setAttribute("hidden", "");
      medecinSearchToggle.setAttribute("aria-expanded", "false");
      medecinSearchInput.value = "";
      medecinSearchQuery = "";
      renderDepartements();
      return;
    }

    medecinSearchBox.removeAttribute("hidden");
    medecinSearchToggle.setAttribute("aria-expanded", "true");
    medecinSearchInput.focus();
  });

  medecinSearchInput.addEventListener("input", () => {
    const query = medecinSearchInput.value.trim().toLowerCase();
    medecinSearchQuery = query;

    displayedDepartements = query
      ? departementsPrefectures.filter((item) =>
          `${item.code} ${item.departement} ${item.prefecture}`
            .toLowerCase()
            .includes(query),
        )
      : [...departementsPrefectures];

    renderDepartements();
  });
}

function setupExpandToggle(button, scopeSelector) {
  if (!button) {
    return;
  }

  const items = document.querySelectorAll(scopeSelector);
  let expanded = false;

  button.addEventListener("click", () => {
    expanded = !expanded;
    items.forEach((item) => {
      item.hidden = !expanded;
    });
    button.textContent = expanded ? "Voir moins" : "Voir tout";
  });
}

function openDocumentModal(flow) {
  if (!documentModal) {
    return;
  }

  currentDocumentFlow = flow;

  if (documentModalTitle) {
    documentModalTitle.textContent =
      flow === "preparation"
        ? "Choisir un document administratif a ajouter"
        : "Choisir un document a ajouter";
  }

  if (documentModalCopy) {
    documentModalCopy.textContent =
      flow === "preparation"
        ? "Cliquez sur un document administratif pour l'ajouter ou le retirer de la simulation."
        : "Cliquez sur un document pour le simuler dans le dossier et dans le parcours permis de conduire.";
  }

  documentModalItems.forEach((item) => {
    item.hidden = item.dataset.documentFlow !== flow;
  });

  renderDocumentModalState();
  documentModal.removeAttribute("hidden");
}

function closeDocumentModal() {
  if (!documentModal) {
    return;
  }

  documentModal.setAttribute("hidden", "");
}

function renderDocumentModalState() {
  documentModalItems.forEach((item) => {
    const { documentKey, documentFlow } = item.dataset;
    const isDossierIdentite = documentFlow === "dossier" && documentKey === "identite";
    const isAdded = isDossierIdentite
      ? uploadedPreparationKeys.has("identite")
      : documentFlow === "preparation"
        ? uploadedPreparationKeys.has(documentKey)
        : uploadedDocumentKeys.has(documentKey);

    item.classList.toggle("is-added", isAdded);
    item.setAttribute("aria-pressed", isAdded ? "true" : "false");
  });
}

function focusDossierCerfaCard() {
  if (!dossierCerfaCard) {
    return;
  }

  cerfaPreview?.removeAttribute("hidden");
  dossierCerfaCard.classList.add("is-focused");
  dossierCerfaCard.scrollIntoView({ behavior: "smooth", block: "center" });

  window.setTimeout(() => {
    dossierCerfaCard.classList.remove("is-focused");
  }, 1800);
}

function toggleCerfaPreview(forceOpen = false) {
  if (!cerfaPreview) {
    return;
  }

  const shouldOpen = forceOpen || cerfaPreview.hasAttribute("hidden");

  if (shouldOpen) {
    cerfaPreview.removeAttribute("hidden");
    cerfaPreview.scrollIntoView({ behavior: "smooth", block: "nearest" });
  } else {
    cerfaPreview.setAttribute("hidden", "");
  }
}

function toggleQuestionnairePreview(forceOpen = false) {
  if (!questionnairePreview) {
    return;
  }

  const shouldOpen = forceOpen || questionnairePreview.hasAttribute("hidden");

  if (shouldOpen) {
    questionnairePreview.removeAttribute("hidden");
    questionnairePreview.scrollIntoView({ behavior: "smooth", block: "nearest" });
  } else {
    questionnairePreview.setAttribute("hidden", "");
  }
}

function showDocumentToast(message) {
  if (!documentToast) {
    return;
  }

  documentToast.textContent = message;
  documentToast.removeAttribute("hidden");

  window.clearTimeout(documentToastTimeout);
  documentToastTimeout = window.setTimeout(() => {
    documentToast.setAttribute("hidden", "");
  }, 2600);
}

function formatFileSize(bytes) {
  if (!Number.isFinite(bytes) || bytes <= 0) {
    return "0 Ko";
  }

  if (bytes < 1024 * 1024) {
    return `${Math.max(1, Math.round(bytes / 1024))} Ko`;
  }

  return `${(bytes / (1024 * 1024)).toFixed(1).replace(".", ",")} Mo`;
}

function getUploadAssociationLabel(category) {
  return dossierUploadCategoryDefinitions[category]?.bucketLabel || "Mes documents";
}

function getUploadCategoryLabel(category) {
  return dossierUploadCategoryDefinitions[category]?.label || category;
}

function getDossierModalTargetLabel(category) {
  const labels = {
    neurologue: "Mes documents > Compte-rendu neurologique",
    examens: "Mes documents > EEG / IRM",
    historique: "Mes documents > Historique medical",
    identite: "Carte d'identite",
    autres: "Autres",
  };

  return labels[category] || getUploadCategoryLabel(category);
}

function updateDossierUploadTarget() {
  if (!dossierUploadSelectedTarget) {
    return;
  }

  if (!currentDossierUploadCategory) {
    dossierUploadSelectedTarget.textContent = "";
    dossierUploadSelectedTarget.setAttribute("hidden", "");
    return;
  }

  dossierUploadSelectedTarget.textContent = `Document cible : ${getDossierModalTargetLabel(currentDossierUploadCategory)}`;
  dossierUploadSelectedTarget.removeAttribute("hidden");
}

function syncUploadCategorySideEffects() {
  Object.entries(dossierUploadCategoryDefinitions).forEach(([categoryKey, config]) => {
    if (config.preparationKey) {
      const hasEntry = uploadedFileEntries.some((entry) => entry.category === categoryKey);

      if (hasEntry) {
        uploadedPreparationKeys.add(config.preparationKey);
      } else {
        uploadedPreparationKeys.delete(config.preparationKey);
      }
    }
  });

  uploadedDocumentKeys.delete("neurologue");
  uploadedDocumentKeys.delete("examens");
  uploadedDocumentKeys.delete("crises");
  uploadedDocumentKeys.delete("traitement");
  uploadedDocumentKeys.delete("traitement-cours");

  uploadedFileEntries.forEach((entry) => {
    const config = dossierUploadCategoryDefinitions[entry.category];
    config?.linkedKeys?.forEach((key) => uploadedDocumentKeys.add(key));
  });
}

function renderDossierUploadList() {
  if (!dossierUploadList) {
    return;
  }

  if (uploadedFileEntries.length === 0) {
    dossierUploadList.setAttribute("hidden", "");
    dossierUploadList.innerHTML = "";
    return;
  }

  dossierUploadList.removeAttribute("hidden");
  dossierUploadList.innerHTML = uploadedFileEntries
    .slice()
    .reverse()
    .map(
      (entry) => `
        <article class="list-card upload-file-card">
          <div>
            <strong>${entry.name}</strong>
            <div class="upload-file-grid">
              <article>
                <span>Categorie</span>
                <strong>${entry.categoryLabel}</strong>
              </article>
              <article>
                <span>Nom</span>
                <strong>${entry.name}</strong>
              </article>
              <article>
                <span>Taille</span>
                <strong>${entry.sizeLabel}</strong>
              </article>
              <article>
                <span>Type</span>
                <strong>${entry.typeLabel}</strong>
              </article>
            </div>
          </div>
          <div class="upload-file-actions">
            <span class="pill">${entry.associationLabel}</span>
            <button class="upload-remove-button" type="button" data-upload-remove="${entry.id}">Supprimer</button>
          </div>
        </article>
      `,
    )
    .join("");

  dossierUploadList.querySelectorAll("[data-upload-remove]").forEach((button) => {
    button.addEventListener("click", () => {
      const { uploadRemove } = button.dataset;
      const removedEntry = uploadedFileEntries.find((entry) => entry.id === uploadRemove);
      uploadedFileEntries = uploadedFileEntries.filter((entry) => entry.id !== uploadRemove);
      syncUploadCategorySideEffects();
      renderAllDocumentSimulations();
      showDocumentToast(
        removedEntry
          ? `${removedEntry.name} a ete retire du prototype.`
          : "Le document a ete retire du prototype.",
      );
    });
  });
}

function handleDossierFiles(fileList, forcedCategory = currentDossierUploadCategory) {
  const files = Array.from(fileList || []);

  if (files.length === 0) {
    return;
  }

  const selectedCategory = forcedCategory || "neurologue";
  const categoryConfig = dossierUploadCategoryDefinitions[selectedCategory] || dossierUploadCategoryDefinitions.neurologue;

  files.forEach((file) => {
    uploadedFileEntries.push({
      id: `${file.name}-${file.size}-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
      name: file.name,
      sizeLabel: formatFileSize(file.size),
      typeLabel: file.type || "Type inconnu",
      category: selectedCategory,
      categoryLabel: getUploadCategoryLabel(selectedCategory),
      associationLabel: getUploadAssociationLabel(selectedCategory),
    });
  });

  syncUploadCategorySideEffects();

  renderAllDocumentSimulations();
  showDocumentToast(
    `${files.length} document${files.length > 1 ? "s" : ""} ajoute${files.length > 1 ? "s" : ""} dans ${categoryConfig.label}.`,
  );

  if (dossierModalFileInput) {
    dossierModalFileInput.value = "";
  }

  closeDossierUploadModal();
}

function updateBackToTopVisibility() {
  if (!backToTopButton) {
    return;
  }

  if (window.scrollY > 260) {
    backToTopButton.removeAttribute("hidden");
  } else {
    backToTopButton.setAttribute("hidden", "");
  }
}

function renderUploadCards() {
  const mesDocumentFiles = uploadedFileEntries.filter((entry) =>
    ["neurologue", "examens", "historique"].includes(entry.category),
  );
  const identiteFiles = uploadedFileEntries.filter((entry) => entry.category === "identite");
  const autresFiles = uploadedFileEntries.filter((entry) => entry.category === "autres");
  const mesDocumentsCount = mesDocumentFiles.length;
  const mesDocumentsComplete = uploadedDocumentKeys.size === dossierDocumentDefinitions.length;

  if (dossierDocumentsText && dossierDocumentsStatus) {
    dossierDocumentsText.textContent =
      mesDocumentsCount > 0
        ? mesDocumentFiles.length > 0
          ? `${mesDocumentFiles.length} fichier${mesDocumentFiles.length > 1 ? "s" : ""} associe${mesDocumentFiles.length > 1 ? "s" : ""} - dernier : ${mesDocumentFiles[mesDocumentFiles.length - 1].name}`
          : `${mesDocumentsCount} document${mesDocumentsCount > 1 ? "s" : ""} medical${mesDocumentsCount > 1 ? "aux" : ""} ajoute${mesDocumentsCount > 1 ? "s" : ""}`
        : "Aucun document ajoute pour le moment";
    dossierDocumentsStatus.textContent =
      mesDocumentsCount === 0
        ? "Non commence"
        : mesDocumentsComplete
          ? "Complet"
          : "En cours";
    dossierDocumentsStatus.className =
      mesDocumentsCount === 0
        ? "status-chip warn"
        : mesDocumentsComplete
          ? "status-chip ok"
          : "status-chip soft";
  }

  if (dossierIdentiteText && dossierIdentiteStatus) {
    const done = uploadedPreparationKeys.has("identite") || identiteFiles.length > 0;
    dossierIdentiteText.textContent = done
      ? identiteFiles.length > 0
        ? `${identiteFiles.length} fichier${identiteFiles.length > 1 ? "s" : ""} associe${identiteFiles.length > 1 ? "s" : ""} - dernier : ${identiteFiles[identiteFiles.length - 1].name}`
        : "Piece d'identite ajoutee"
      : "Aucune piece d'identite ajoutee";
    dossierIdentiteStatus.textContent = done ? "Complet" : "Non commence";
    dossierIdentiteStatus.className = done ? "status-chip ok" : "status-chip warn";
  }

  const cerfaFile = uploadedPreparationKeys.has("cerfa");
  if (dossierCerfaText && dossierCerfaStatus) {
    dossierCerfaText.textContent = cerfaFile
      ? "Le formulaire CERFA est complete"
      : "Le formulaire n'a pas encore ete renseigne";
    dossierCerfaStatus.textContent = cerfaFile ? "Complet" : "Non commence";
    dossierCerfaStatus.className = cerfaFile ? "status-chip ok" : "status-chip warn";
  }

  const questionnaireFile = uploadedPreparationKeys.has("questionnaire");
  if (dossierQuestionnaireText && dossierQuestionnaireStatus) {
    dossierQuestionnaireText.textContent = questionnaireFile
      ? "Le questionnaire de sante est complete"
      : "Aucun questionnaire de sante transmis";
    dossierQuestionnaireStatus.textContent = questionnaireFile ? "Complet" : "Non commence";
    dossierQuestionnaireStatus.className = questionnaireFile ? "status-chip ok" : "status-chip warn";
  }

  if (openCerfaFill) {
    openCerfaFill.textContent = cerfaFile ? "Rempli" : "Remplir";
  }

  if (openQuestionnaireFill) {
    openQuestionnaireFill.textContent = questionnaireFile ? "Rempli" : "Remplir";
  }

  if (dossierAutresText && dossierAutresStatus) {
    const autresCount = autresFiles.length + (uploadedPreparationKeys.has("permis") ? 1 : 0);

    dossierAutresText.textContent =
      autresCount === 0
        ? "Aucune piece complementaire ajoutee"
        : autresFiles.length > 0
          ? `${autresFiles.length} fichier${autresFiles.length > 1 ? "s" : ""} associe${autresFiles.length > 1 ? "s" : ""} - dernier : ${autresFiles[autresFiles.length - 1].name}`
          : `${autresCount} piece${autresCount > 1 ? "s" : ""} complementaire${autresCount > 1 ? "s" : ""} ajoutee${autresCount > 1 ? "s" : ""}`;
    dossierAutresStatus.textContent =
      autresCount === 0 ? "Vide" : uploadedPreparationKeys.has("permis") && autresFiles.length > 0 ? "Complet" : "En cours";
    dossierAutresStatus.className =
      autresCount === 0
        ? "status-chip soft"
        : uploadedPreparationKeys.has("permis") && autresFiles.length > 0
          ? "status-chip ok"
          : "status-chip soft";
  }
}

function renderDossierChoiceState() {
  dossierUploadChoiceButtons.forEach((button) => {
    const category = button.dataset.dossierChoice;
    const hasUploadedFile = uploadedFileEntries.some((entry) => entry.category === category);
    button.classList.toggle("is-selected", category === currentDossierUploadCategory);
    button.classList.toggle("is-added", hasUploadedFile);
  });
}

function updateDossierUploadModalSelection() {
  updateDossierUploadTarget();
  renderDossierChoiceState();
}

function showDossierUploadSurface(category) {
  currentDossierUploadCategory = category;
  dossierUploadModalSurface?.removeAttribute("hidden");
  updateDossierUploadModalSelection();
}

function openDossierUploadModal(mode) {
  currentDossierUploadCategory = "";
  dossierUploadModal?.removeAttribute("hidden");
  dossierUploadChoiceList?.removeAttribute("hidden");
  dossierUploadModalSurface?.setAttribute("hidden", "");

  if (dossierModalFileInput) {
    dossierModalFileInput.value = "";
  }

  if (mode === "mes-documents") {
    if (dossierUploadModalTitle) {
      dossierUploadModalTitle.textContent = "Ajouter un document";
    }

    if (dossierUploadModalCopy) {
      dossierUploadModalCopy.textContent =
        "Choisissez d'abord le document medical a ajouter, puis deposez votre fichier dans la zone prevue.";
    }
  } else if (mode === "identite") {
    if (dossierUploadModalTitle) {
      dossierUploadModalTitle.textContent = "Ajouter une piece d'identite";
    }

    if (dossierUploadModalCopy) {
      dossierUploadModalCopy.textContent =
        "Deposez ici la piece d'identite a associer a votre dossier.";
    }

    dossierUploadChoiceList?.setAttribute("hidden", "");
    showDossierUploadSurface("identite");
  } else {
    if (dossierUploadModalTitle) {
      dossierUploadModalTitle.textContent = "Ajouter un document complementaire";
    }

    if (dossierUploadModalCopy) {
      dossierUploadModalCopy.textContent =
        "Deposez ici un document complementaire a conserver dans la categorie Autres.";
    }

    dossierUploadChoiceList?.setAttribute("hidden", "");
    showDossierUploadSurface("autres");
  }

  updateDossierUploadModalSelection();
}

function closeDossierUploadModal() {
  dossierUploadModal?.setAttribute("hidden", "");
  dossierUploadModalSurface?.setAttribute("hidden", "");
  dossierUploadChoiceList?.removeAttribute("hidden");
  currentDossierUploadCategory = "";

  if (dossierModalFileInput) {
    dossierModalFileInput.value = "";
  }

  updateDossierUploadModalSelection();
}

function setChecklistItemState(config, done, doneLabel, pendingLabel) {
  if (!config?.item || !config?.status) {
    return;
  }

  config.item.classList.toggle("is-complete", done);
  config.status.textContent = done ? doneLabel : pendingLabel;
  config.status.className = done ? "status-chip ok" : "status-chip warn";
}

function renderChecklistState() {
  const identiteDone = uploadedPreparationKeys.has("identite");
  const questionnaireDone = uploadedPreparationKeys.has("questionnaire");
  const cerfaDone = uploadedPreparationKeys.has("cerfa");
  const medicalDone = uploadedDocumentKeys.size > 0;
  const completedCount = [identiteDone, questionnaireDone, cerfaDone, medicalDone].filter(Boolean).length;

  setChecklistItemState(checklistItems.identite, identiteDone, "Pret", "A faire");
  setChecklistItemState(checklistItems.questionnaire, questionnaireDone, "Ajoute", "A faire");
  setChecklistItemState(checklistItems.cerfa, cerfaDone, "Ajoute", "A faire");
  setChecklistItemState(checklistItems.medical, medicalDone, "Ajoute", "A faire");

  if (checklistCount) {
    checklistCount.textContent = `${completedCount} / 4 pieces prêtes`;
  }

  if (checklistCaption) {
    checklistCaption.textContent =
      completedCount === 0
        ? "Commencez par ajouter vos premiers documents dans les cartes de gauche."
        : completedCount === 4
          ? "Votre checklist dossier est complete pour cette partie."
          : "Continuez a ajouter vos fichiers pour completer la checklist.";
  }
}

function updateHomeAndParcoursStatus() {
  const dossierComplete =
    uploadedDocumentKeys.size === dossierDocumentDefinitions.length;
  const preparationComplete = requiredPreparationKeys.every((key) =>
    uploadedPreparationKeys.has(key),
  );
  const followupKeys = getControleFollowupKeys();
  const totalSteps = staticParcoursSteps.length + followupKeys.length;
  const controleComplete = controleStepSkipped || controleStepValidated;
  const avisComplete = Boolean(selectedAvisKey);
  const controleNeedsFollowup = followupKeys.length > 0;
  const controleFollowupActions = followupKeys
    .map((key) => controleFollowupDefinitions[key]?.homeLabel)
    .filter(Boolean);

  let currentStepLabel = "Etape actuelle: Declaration lors de l'inscription";
  let stepIndex = getParcoursOrder().indexOf("declaration") + 1;
  let currentStepCount = `${stepIndex} sur ${totalSteps}`;
  let badgeText = `Etape ${stepIndex}/${totalSteps}`;
  let action1 = "Creer un compte ANTS";
  let action2 = "Obtenir le numero NEPH";

  if (avisComplete) {
    currentStepLabel = "Etape actuelle: Decision prefectorale et recours";
    stepIndex = getParcoursOrder().indexOf("decision") + 1;
    currentStepCount = `${stepIndex} sur ${totalSteps}`;
    badgeText = `Etape ${stepIndex}/${totalSteps}`;
    action1 = "Transmettre la demande sur l'ANTS";
    action2 = "Verifier la decision prefectorale";
  } else if (controleNeedsFollowup) {
    const currentFollowupStep = isFollowupStep(currentParcoursStep)
      ? currentParcoursStep
      : getFollowupStepName(followupKeys[0]);
    const currentFollowupKey = getFollowupKeyFromStep(currentFollowupStep);
    const currentFollowupConfig = controleFollowupDefinitions[currentFollowupKey];
    const parcoursOrder = getParcoursOrder();

    currentStepLabel = `Etape actuelle: ${currentFollowupConfig?.stepTitle || "Suivi complementaire"}`;
    stepIndex = Math.max(1, parcoursOrder.indexOf(currentFollowupStep) + 1);
    currentStepCount = `${stepIndex} sur ${totalSteps}`;
    badgeText = `Etape ${stepIndex}/${totalSteps}`;
    action1 = currentFollowupConfig?.homeLabel || "Suivre les demandes du medecin agree";
    action2 = controleFollowupActions.find((label) => label !== action1) || "Consulter l'avis medical une fois cette etape terminee";
  } else if (controleComplete) {
    currentStepLabel = "Etape actuelle: Avis medical";
    stepIndex = getParcoursOrder().indexOf("avis") + 1;
    currentStepCount = `${stepIndex} sur ${totalSteps}`;
    badgeText = `Etape ${stepIndex}/${totalSteps}`;
    action1 = "Consulter l'avis medical";
    action2 = "Verifier la decision prefectorale";
  } else if (preparationComplete) {
    currentStepLabel = "Etape actuelle: Controle medical d'aptitude";
    stepIndex = getParcoursOrder().indexOf("controle") + 1;
    currentStepCount = `${stepIndex} sur ${totalSteps}`;
    badgeText = `Etape ${stepIndex}/${totalSteps}`;
    action1 = "Verifier si des examens sont demandes";
    action2 = "Valider ou passer cette etape";
  } else if (medecinStepComplete) {
    currentStepLabel = "Etape actuelle: Preparation du dossier medical-administratif";
    stepIndex = getParcoursOrder().indexOf("preparation") + 1;
    currentStepCount = `${stepIndex} sur ${totalSteps}`;
    badgeText = `Etape ${stepIndex}/${totalSteps}`;
    action1 = "Remplir le formulaire CERFA";
    action2 = "Completer le questionnaire de sante";
  } else if (dossierComplete) {
    currentStepLabel = "Etape actuelle: Choix d'un medecin agree";
    stepIndex = getParcoursOrder().indexOf("medecin") + 1;
    currentStepCount = `${stepIndex} sur ${totalSteps}`;
    badgeText = `Etape ${stepIndex}/${totalSteps}`;
    action1 = "Choisir un medecin agree";
    action2 = "Verifier la prefecture selectionnee";
  }

  if (homeProcedureStatus) {
    homeProcedureStatus.textContent = currentStepLabel;
  }

  if (homeProcedureCount) {
    homeProcedureCount.textContent = currentStepCount;
  }

  if (parcoursStepBadge) {
    parcoursStepBadge.textContent = badgeText;
  }

  renderHomeTrack(totalSteps, stepIndex);

  if (homeProcedureAction1) {
    homeProcedureAction1.textContent = action1;
  }

  if (homeProcedureAction2) {
    homeProcedureAction2.textContent = action2;
  }
}

function renderControleFollowup() {
  if (!controleFollowup || !controleFollowupList || !controleFollowupCount || !controleFollowupCopy) {
    return;
  }

  const selectedKeys = [...controleSelection];
  const showFollowup = controleStepValidated && selectedKeys.length > 0;

  if (!showFollowup) {
    controleFollowup.setAttribute("hidden", "");
    controleFollowupList.innerHTML = "";
    return;
  }

  controleFollowup.removeAttribute("hidden");
  controleFollowupCount.textContent = `${selectedKeys.length} action${selectedKeys.length > 1 ? "s" : ""}`;
  controleFollowupCopy.textContent =
    selectedKeys.length === 1
      ? "Une action d'accompagnement a ete debloquee a partir de votre selection."
      : "Des actions d'accompagnement ont ete debloquees a partir de votre selection.";

  controleFollowupList.innerHTML = selectedKeys
    .map((key, index) => {
      const config = controleFollowupDefinitions[key];

      if (!config) {
        return "";
      }

      return `
        <article class="list-card">
          <div>
            <strong>${index + 1}. ${config.title}</strong>
            <p>${config.description}</p>
          </div>
          <span class="medecin-card-badge">Debloque</span>
        </article>
      `;
    })
    .join("");
}

function renderDossierSimulation() {
  const totalDocuments = dossierDocumentDefinitions.length;
  const uploadedDocumentsCount = uploadedDocumentKeys.size;
  const progress = Math.round((uploadedDocumentsCount / totalDocuments) * 100);
  const dossierComplete = uploadedDocumentsCount === totalDocuments;
  const dossierStep = document.querySelector('[data-parcours-step="dossier"]');

  if (dossierProgressLabel) {
    dossierProgressLabel.textContent = `${progress}%`;
  }

  if (dossierProgressFill) {
    dossierProgressFill.style.width = `${progress}%`;
  }

  if (dossierStep) {
    dossierStep.classList.toggle("done", dossierComplete);
  }

  dossierDocumentDefinitions.forEach((documentItem) => {
    documentItem.card?.classList.toggle(
      "is-complete",
      uploadedDocumentKeys.has(documentItem.key),
    );
  });

  if (dossierComplete && currentParcoursStep === "dossier") {
    setParcoursStep("medecin");
  }

  if (!dossierComplete && currentParcoursStep === "medecin") {
    setParcoursStep("dossier");
  }
}

function renderMedecinSimulation() {
  const medecinStep = document.querySelector('[data-parcours-step="medecin"]');
  const progress = medecinStepComplete ? 100 : 0;

  if (medecinStep) {
    medecinStep.classList.toggle("done", medecinStepComplete);
  }

  if (medecinProgressLabel) {
    medecinProgressLabel.textContent = `${progress}%`;
  }

  if (medecinProgressFill) {
    medecinProgressFill.style.width = `${progress}%`;
  }
}

function renderPreparationSimulation() {
  const totalDocuments = requiredPreparationKeys.length;
  const uploadedDocumentsCount = requiredPreparationKeys.filter((key) =>
    uploadedPreparationKeys.has(key),
  ).length;
  const progress = Math.round((uploadedDocumentsCount / totalDocuments) * 100);
  const preparationComplete = uploadedDocumentsCount === totalDocuments;
  const preparationStep = document.querySelector('[data-parcours-step="preparation"]');

  if (preparationProgressLabel) {
    preparationProgressLabel.textContent = `${progress}%`;
  }

  if (preparationProgressFill) {
    preparationProgressFill.style.width = `${progress}%`;
  }

  preparationDocumentDefinitions.forEach((documentItem) => {
    documentItem.card?.classList.toggle(
      "is-complete",
      uploadedPreparationKeys.has(documentItem.key),
    );
  });

  if (preparationStep) {
    preparationStep.classList.toggle("done", preparationComplete);
  }

  if (preparationComplete && currentParcoursStep === "preparation") {
    setParcoursStep("controle");
  }
}

function renderControleSimulation() {
  const controleStep = document.querySelector('[data-parcours-step="controle"]');
  const activeControleDefinitions = controleDocumentDefinitions.filter(
    (documentItem) => !documentItem.card?.hidden,
  );
  const selectedCount = activeControleDefinitions.filter((documentItem) =>
    controleSelection.has(documentItem.key),
  ).length;
  const followupKeys = getControleFollowupKeys();
  const totalCount = Math.max(1, activeControleDefinitions.length);
  const progress = controleStepSkipped
    ? 100
    : controleStepValidated
      ? 100
      : Math.round((selectedCount / totalCount) * 100);
  const controleComplete = controleStepSkipped || controleStepValidated;

  if (controleProgressLabel) {
    controleProgressLabel.textContent = `${progress}%`;
  }

  if (controleProgressFill) {
    controleProgressFill.style.width = `${progress}%`;
  }

  if (controleHelperText) {
    controleHelperText.textContent = controleStepSkipped
      ? "Aucun examen complementaire n'a ete demande : cette etape est passee."
      : controleStepValidated
        ? selectedCount > 0
          ? `${selectedCount} nouvelle${selectedCount > 1 ? "s" : ""} etape${selectedCount > 1 ? "s" : ""} debloquee${selectedCount > 1 ? "s" : ""} apres validation.`
          : "Aucun examen supplementaire retenu : vous pouvez passer a l'avis medical."
        : "Etape facultative : le medecin peut ne demander aucun examen, ou seulement certains de ces elements.";
  }

  controleDocumentDefinitions.forEach((documentItem) => {
    documentItem.card?.classList.toggle("is-selected", controleSelection.has(documentItem.key));
    documentItem.card?.classList.toggle("is-complete", controleComplete && controleSelection.has(documentItem.key));
  });

  if (controleStep) {
    controleStep.classList.toggle("done", controleComplete);
  }

  if (skipControleStep) {
    skipControleStep.textContent = controleStepSkipped ? "Etape passee" : "Aucun examen demande";
  }

  if (validateControleStep) {
    validateControleStep.textContent = controleStepValidated ? "Selection validee" : "Valider la selection";
  }

  renderControleFollowup();

  if (controleStepSkipped && currentParcoursStep === "controle") {
    setParcoursStep("avis");
  }
}

function renderAvisSimulation() {
  const avisStep = document.querySelector('[data-parcours-step="avis"]');
  const avisComplete = Boolean(selectedAvisKey);
  const progress = avisComplete ? 100 : 0;

  if (avisProgressLabel) {
    avisProgressLabel.textContent = `${progress}%`;
  }

  if (avisProgressFill) {
    avisProgressFill.style.width = `${progress}%`;
  }

  avisDefinitions.forEach((avisItem) => {
    avisItem.card?.classList.toggle("is-complete", selectedAvisKey === avisItem.key);
  });

  if (avisStep) {
    avisStep.classList.toggle("done", avisComplete);
  }

  if (avisComplete && currentParcoursStep === "avis") {
    setParcoursStep("decision");
  }
}

function renderDecisionSimulation() {
  const visibleCards = [];
  const favorableAvis = favorableAvisKeys.has(selectedAvisKey);

  if (decisionCardAnts) {
    const visible = favorableAvis;
    decisionCardAnts.hidden = !visible;

    if (visible) {
      visibleCards.push({ icon: decisionCardAntsIcon, card: decisionCardAnts });
    }
  }

  if (decisionCardGracieux) {
    const visible = selectedAvisKey === "refus";
    decisionCardGracieux.hidden = !visible;

    if (visible) {
      visibleCards.push({ icon: decisionCardGracieuxIcon, card: decisionCardGracieux });
    }
  }

  if (decisionCardContentieux) {
    const visible = selectedAvisKey === "refus";
    decisionCardContentieux.hidden = !visible;

    if (visible) {
      visibleCards.push({ icon: decisionCardContentieuxIcon, card: decisionCardContentieux });
    }
  }

  visibleCards.forEach((item, index) => {
    if (item.icon) {
      item.icon.textContent = `${index + 1}`;
    }
  });

  const progress = 0;

  if (decisionProgressLabel) {
    decisionProgressLabel.textContent = `${progress}%`;
  }

  if (decisionProgressFill) {
    decisionProgressFill.style.width = `${progress}%`;
  }
}

function renderAllDocumentSimulations() {
  renderPermitDependentUI();
  renderDeclarationSteps();
  renderDynamicControleSteps();
  renderDossierSimulation();
  renderMedecinSimulation();
  renderPreparationSimulation();
  renderControleSimulation();
  renderAvisSimulation();
  renderDecisionSimulation();
  renderUploadCards();
  renderDossierUploadList();
  renderChecklistState();
  renderDocumentModalState();
  updateHomeAndParcoursStatus();
  saveCurrentUserProgress();
}

function setupDocumentSimulation() {
  dossierAddMesDocumentsButton?.addEventListener("click", () => {
    openDossierUploadModal("mes-documents");
  });

  dossierAddIdentiteButton?.addEventListener("click", () => {
    openDossierUploadModal("identite");
  });

  dossierAddAutresButton?.addEventListener("click", () => {
    openDossierUploadModal("autres");
  });

  dossierUploadModalClose?.addEventListener("click", () => {
    closeDossierUploadModal();
  });

  dossierUploadModal?.addEventListener("click", (event) => {
    if (event.target === dossierUploadModal) {
      closeDossierUploadModal();
    }
  });

  dossierUploadChoiceButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const { dossierChoice } = button.dataset;

      if (!dossierChoice) {
        return;
      }

      showDossierUploadSurface(dossierChoice);
    });
  });

  dossierModalBrowseButton?.addEventListener("click", () => {
    dossierModalFileInput?.click();
  });

  dossierModalFileInput?.addEventListener("change", () => {
    handleDossierFiles(dossierModalFileInput.files);
  });

  ["dragenter", "dragover"].forEach((eventName) => {
    dossierModalDropzone?.addEventListener(eventName, (event) => {
      event.preventDefault();
      dossierModalDropzone.classList.add("is-dragover");
    });
  });

  ["dragleave", "drop"].forEach((eventName) => {
    dossierModalDropzone?.addEventListener(eventName, (event) => {
      event.preventDefault();
      dossierModalDropzone.classList.remove("is-dragover");
    });
  });

  dossierModalDropzone?.addEventListener("drop", (event) => {
    const fileList = event.dataTransfer?.files;
    handleDossierFiles(fileList);
  });

  openPreparationModalButton?.addEventListener("click", () => {
    openDocumentModal("preparation");
  });

  documentModalClose?.addEventListener("click", () => {
    closeDocumentModal();
  });

  documentModal?.addEventListener("click", (event) => {
    if (event.target === documentModal) {
      closeDocumentModal();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && dossierUploadModal && !dossierUploadModal.hasAttribute("hidden")) {
      closeDossierUploadModal();
    }

    if (event.key === "Escape" && documentModal && !documentModal.hasAttribute("hidden")) {
      closeDocumentModal();
    }
  });

  documentModalItems.forEach((item) => {
    item.addEventListener("click", () => {
      const { documentKey, documentFlow } = item.dataset;

      if (documentFlow === "dossier" && documentKey === "identite") {
        if (uploadedPreparationKeys.has("identite")) {
          uploadedPreparationKeys.delete("identite");
          showDocumentToast("Vous avez retire le document Carte d'identite.");
        } else {
          uploadedPreparationKeys.add("identite");
          showDocumentToast("Vous avez ajoute le document Carte d'identite.");
        }

        renderAllDocumentSimulations();
        closeDocumentModal();
        setActiveScreen("dossier");
        return;
      }

      const definitions =
        documentFlow === "preparation"
          ? preparationDocumentDefinitions
          : dossierDocumentDefinitions;
      const store =
        documentFlow === "preparation" ? uploadedPreparationKeys : uploadedDocumentKeys;
      const documentDefinition = definitions.find(
        (documentItem) => documentItem.key === documentKey,
      );

      if (!documentKey || !documentDefinition) {
        return;
      }

      if (store.has(documentKey)) {
        store.delete(documentKey);
        showDocumentToast(`Vous avez retire le document ${documentDefinition.title}.`);
      } else {
        store.add(documentKey);
        showDocumentToast(`Vous avez ajoute le document ${documentDefinition.title}.`);
      }

      renderAllDocumentSimulations();
      closeDocumentModal();
      if (documentFlow === "preparation") {
        setActiveScreen("parcours");
        setParcoursStep(
          requiredPreparationKeys.every((key) => uploadedPreparationKeys.has(key))
            ? "controle"
            : "preparation",
        );
      } else {
        setActiveScreen("dossier");
      }
    });
  });

  controleDocumentDefinitions.forEach((documentItem) => {
    documentItem.card?.addEventListener("click", () => {
      if (controleStepSkipped) {
        controleStepSkipped = false;
      }

      controleStepValidated = false;

      if (controleSelection.has(documentItem.key)) {
        controleSelection.delete(documentItem.key);
      } else {
        controleSelection.add(documentItem.key);
      }

      renderAllDocumentSimulations();
    });
  });

  skipControleStep?.addEventListener("click", () => {
    controleSelection.clear();
    controleStepValidated = false;
    controleStepSkipped = true;
    renderAllDocumentSimulations();
    setParcoursStep("avis");
  });

  validateControleStep?.addEventListener("click", () => {
    controleStepSkipped = false;
    controleStepValidated = true;
    renderAllDocumentSimulations();

    if (controleSelection.size === 0) {
      setParcoursStep("avis");
      return;
    }

    setParcoursStep(getFollowupStepName([...controleSelection][0]));
  });

  avisDefinitions.forEach((avisItem) => {
    avisItem.card?.addEventListener("click", () => {
      selectedAvisKey = avisItem.key;
      renderAllDocumentSimulations();
      showDocumentToast("L'avis medical a ete selectionne.");
      setParcoursStep("decision");
    });
  });

  renderAllDocumentSimulations();
}

prepCardCerfa?.addEventListener("click", (event) => {
  event.preventDefault();
  setActiveScreen("dossier");
  window.setTimeout(() => {
    focusDossierCerfaCard();
  }, 80);
});

dossierCerfaCard?.addEventListener("click", () => {
  toggleCerfaPreview();
});

cerfaPreviewClose?.addEventListener("click", () => {
  cerfaPreview?.setAttribute("hidden", "");
});

openCerfaFill?.addEventListener("click", (event) => {
  event.stopPropagation();
  uploadedPreparationKeys.add("cerfa");
  renderAllDocumentSimulations();
  showDocumentToast("Le formulaire CERFA a ete marque comme rempli.");
});

dossierQuestionnaireCard?.addEventListener("click", () => {
  toggleQuestionnairePreview();
});

openQuestionnaireFill?.addEventListener("click", (event) => {
  event.stopPropagation();
  uploadedPreparationKeys.add("questionnaire");
  renderAllDocumentSimulations();
  showDocumentToast("Le questionnaire de sante a ete marque comme rempli.");
});

questionnairePreviewClose?.addEventListener("click", () => {
  questionnairePreview?.setAttribute("hidden", "");
});

backToTopButton?.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

loginForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = loginEmail?.value.trim().toLowerCase() || "";
  const password = loginPassword?.value || "";
  const accounts = loadPrototypeAccounts();
  const matchingAccount = accounts.find(
    (account) => account.email.toLowerCase() === email && account.password === password,
  );

  if (!matchingAccount) {
    showDocumentToast("Compte introuvable ou mot de passe incorrect.");
    return;
  }

  currentUser = matchingAccount;
  window.localStorage.setItem(
    prototypeSessionStorageKey,
    JSON.stringify({ email: matchingAccount.email }),
  );
  setAuthenticationState(true);
  showDocumentToast(`Connexion reussie pour ${matchingAccount.email}.`);
  loginPassword && (loginPassword.value = "");
});

registerForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = registerName?.value.trim() || "";
  const email = registerEmail?.value.trim().toLowerCase() || "";
  const password = registerPassword?.value || "";
  const passwordConfirm = registerPasswordConfirm?.value || "";

  if (!name || !email || !password || !passwordConfirm) {
    showDocumentToast("Merci de remplir tous les champs pour creer le compte.");
    return;
  }

  if (password !== passwordConfirm) {
    showDocumentToast("Les mots de passe ne correspondent pas.");
    return;
  }

  const accounts = loadPrototypeAccounts();
  const alreadyExists = accounts.some((account) => account.email.toLowerCase() === email);

  if (alreadyExists) {
    showDocumentToast("Un compte existe deja avec cette adresse e-mail.");
    return;
  }

  const newAccount = { name, email, password, hasDrivingLicense: null, hasAntsAccount: null };
  accounts.push(newAccount);
  savePrototypeAccounts(accounts);

  registerForm.reset();
  currentUser = newAccount;
  window.localStorage.setItem(
    prototypeSessionStorageKey,
    JSON.stringify({ email: newAccount.email }),
  );
  setAuthenticationState(true);
  openPermitChoiceModal();
  showDocumentToast(`Le compte ${email} a ete cree dans le prototype.`);
});

logoutButton?.addEventListener("click", () => {
  setAuthenticationState(false);
  showDocumentToast("Vous avez ete deconnecte.");
});

permitChoiceYes?.addEventListener("click", () => {
  if (!currentUser) {
    return;
  }

  currentUser = { ...currentUser, hasDrivingLicense: true };
  persistCurrentUserUpdates();
  maybeCloseOnboardingQuiz();
  showDocumentToast("Le parcours a ete ajuste avec le permis de conduire.");
});

permitChoiceNo?.addEventListener("click", () => {
  if (!currentUser) {
    return;
  }

  currentUser = { ...currentUser, hasDrivingLicense: false };
  persistCurrentUserUpdates();
  maybeCloseOnboardingQuiz();
  showDocumentToast("Le parcours a ete ajuste sans permis de conduire.");
});

antsChoiceYes?.addEventListener("click", () => {
  if (!currentUser) {
    return;
  }

  currentUser = { ...currentUser, hasAntsAccount: true };
  persistCurrentUserUpdates();
  maybeCloseOnboardingQuiz();
  showDocumentToast("Le parcours a ete ajuste avec un compte ANTS existant.");
});

antsChoiceNo?.addEventListener("click", () => {
  if (!currentUser) {
    return;
  }

  currentUser = { ...currentUser, hasAntsAccount: false };
  persistCurrentUserUpdates();
  maybeCloseOnboardingQuiz();
  showDocumentToast("Le parcours conserve la creation de compte ANTS.");
});

screenButtons.forEach((button) => {
  button.addEventListener("click", () => setActiveScreen(button.dataset.screen));
});

shortcutButtons.forEach((button) => {
  button.addEventListener("click", () => setActiveScreen(button.dataset.target));
});

parcoursTimeline?.addEventListener("click", (event) => {
  const step = event.target.closest("[data-parcours-step]");

  if (!step) {
    return;
  }

  setParcoursStep(step.dataset.parcoursStep);
});

parcoursDetailStack?.addEventListener("click", (event) => {
  const toggle = event.target.closest("[data-collapsible-toggle]");

  if (!toggle) {
    return;
  }

  const sectionKey = toggle.dataset.collapsibleToggle;
  const items = parcoursDetailStack.querySelectorAll(`[data-collapsible-item="${sectionKey}"]`);
  const expanded = toggle.dataset.expanded === "true";

  items.forEach((item, index) => {
    if (index === 0) {
      return;
    }

    item.hidden = expanded;
  });

  toggle.dataset.expanded = expanded ? "false" : "true";
  toggle.textContent = expanded ? "Voir tout" : "Voir moins";
});

renderDepartements();
renderMedecins();
setParcoursStep(currentParcoursStep);
setupMedecinSearch();
setupExpandToggle(notificationsToggle, ".notif-list .extra-item");
setupExpandToggle(agendaToggle, ".agenda-list .extra-item");
setupDocumentSimulation();
updateBackToTopVisibility();
window.addEventListener("scroll", updateBackToTopVisibility);
updateUserUI();

try {
  const storedSession = window.localStorage.getItem(prototypeSessionStorageKey);
  const parsedSession = storedSession ? JSON.parse(storedSession) : null;
  const matchingAccount = parsedSession?.email
    ? loadPrototypeAccounts().find((account) => account.email === parsedSession.email)
    : null;

  if (matchingAccount) {
    currentUser = matchingAccount;
    setAuthenticationState(true);
  } else {
    setAuthenticationState(false);
  }
} catch {
  setAuthenticationState(false);
}
