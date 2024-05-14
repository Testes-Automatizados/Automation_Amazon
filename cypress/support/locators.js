const locators = { 

    LOGIN: {
        EMAIL:'#ap_email',
        PASSWORD:'#ap_password',
        CONTINUE: '.a-button-inner > #continue',
        SUBMIT: '#signInSubmit'
    },

    ENDERECO : {
        NAME: '#address-ui-widgets-enterAddressFullName',
        PHONE: '#address-ui-widgets-enterAddressPhoneNumber',
        CEP: '#address-ui-widgets-enterAddressPostalCode',
        ADDRESS1: '#address-ui-widgets-enterAddressLine1',
        ADDRESS2: '#address-ui-widgets-enterAddressLine2',
        CITY: '#address-ui-widgets-enterAddressCity',
        STATE: '#address-ui-widgets-enterAddressStateOrRegion',
        SUBMIT: '#address-ui-widgets-form-submit-button',
    },

    PRODUTO : {
        PRODUD1: '[data-asin="B088L3TM7X"] > .sg-col-inner > .s-widget-container > [data-action="puis-card-container-declarative"] > .puis-card-container > .a-spacing-base > .s-product-image-container > .rush-component > .a-link-normal > .a-section > .s-image',
        PRODUTO2: '[data-asin="B07TV9B7Z3"] > .sg-col-inner > .s-widget-container > [data-action="puis-card-container-declarative"] > .puis-card-container > :nth-child(1) > :nth-child(1) > .puis-list-col-left > .puisg-col-inner > .s-product-image-container > :nth-child(1) > .rush-component > .a-link-normal > .a-section',
        
    }

}

export default locators;