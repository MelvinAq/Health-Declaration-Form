function showDeclarationForm() {
    hideAllPages();
    document.getElementById('triageForm').style.display = 'block';
}

function showDisagreePage() {
    hideAllPages();
    document.getElementById('disagreePage').style.display = 'block';
}

function showAuthorizationPage() {
    hideAllPages();
    document.getElementById('authorizationPage').style.display = 'block';
}

function showHomePage() {
    hideAllPages();
    document.getElementById('homePage').style.display = 'block';
}

function showTriageForm() {
    hideAllPages();
    document.getElementById('triageForm').style.display = 'block';
}

function showClinicalSymptoms() {
    hideAllPages();
    document.getElementById('clinicalSymptomsForm').style.display = 'block';
}

function showExposurePage() {
    hideAllPages();
    document.getElementById('exposureForm').style.display = 'block';
}

function showAssessmentForm() {
    hideAllPages();
    document.getElementById('assessmentForm').style.display = 'block';
}

function showThankYouPage() {
    hideAllPages();
    document.getElementById('thankYouPage').style.display = 'block';
}

// Additional logic to show/hide the pregnant question based on the selected sex
document.getElementById('sex').addEventListener('change', function () {
    var sexValue = document.getElementById('sex').value;
    var pregnantGroup = document.getElementById('pregnantGroup');
    if (sexValue === 'female') {
        pregnantGroup.style.display = 'block';
    } else {
        pregnantGroup.style.display = 'none';
    }
});

function hideAllPages() {
    var pages = [
        'homePage',
        'authorizationPage',
        'disagreePage',
        'triageForm',
        'clinicalSymptomsForm',
        'exposureForm',
        'assessmentForm',
        'thankYouPage'
    ];

    pages.forEach(function (pageId) {
        document.getElementById(pageId).style.display = 'none';
    });
}
