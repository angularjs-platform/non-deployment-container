#Description
The package for the NoN Frontend Development

#Setup
    cd non-build-manager
    npm link 

    cd ../non-framework
    npm link

    cd ../non-shared/non-shared-common
    npm link @norn/non-framework
    npm link

    cd ../non-shared-authentication-management
    npm link @norn/non-framework
    npm link

    cd ../non-shared-system-administration
    npm link @norn/non-framework
    npm link

    cd ../../non-ifus/non-ifu-login
    npm link @norn/non-framework
    npm link @norn/non-shared-common
    npm link @norn/non-shared-authentication-management
    npm link

    cd ../non-ifu-home
    npm link @norn/non-framework
    npm link @norn/non-shared-common
    npm link

    cd ../non-ifu-system-administration-bankgroup
    npm link @norn/non-framework
    npm link @norn/non-shared-common
    npm link @norn/non-shared-system-administration
    npm link

    cd ../non-ifu-system-administration-bank
    npm link @norn/non-framework
    npm link @norn/non-shared-common
    npm link @norn/non-shared-system-administration
    npm link

    cd ../non-ifu-system-administration-customer
    npm link @norn/non-framework
    npm link @norn/non-shared-common
    npm link @norn/non-shared-system-administration
    npm link

    cd ../non-ifu-ui-showcase
    npm link @norn/non-framework
    npm link @norn/non-shared-common
    npm link

    cd ../../non-themes/non-theme-base
    npm link

    cd ../non-theme-custom
    npm link

    cd ../../non-deployment-container
    npm link @norn/non-framework
    npm link @norn/non-build-manager
    npm link @norn/non-shared-common
    npm link @norn/non-shared-authentication-management
    npm link @norn/non-shared-system-administration
    npm link @norn/non-ifu-home
    npm link @norn/non-ifu-login
    npm link @norn/non-ifu-system-administration-bankgroup
    npm link @norn/non-ifu-system-administration-bank
    npm link @norn/non-ifu-system-administration-customer
    npm link @norn/non-ifu-ui-showcase
    npm link @norn/non-theme-base
    npm link @norn/non-theme-custom
    npm start
