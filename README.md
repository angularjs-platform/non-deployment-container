#Description
The package for the NoN Frontend Development

#Setup
    cd non-build-manager
    npm link 

    cd ../non-framework
    npm link

    cd ../non-ifus/non-ifu-login
    npm link @norn/non-framework
    npm link

    cd ../non-ifu-main
    npm link @norn/non-framework
    npm link

    cd ../non-ifu-home
    npm link @norn/non-framework
    npm link

    cd ../non-ifu-organization
    npm link @norn/non-framework
    npm link

    cd ../../non-themes/non-theme-base
    npm link

    cd ../non-theme-custom
    npm link

    cd ../../non-deployment-container
    npm link @norn/non-framework
    npm link @norn/non-build-manager
    npm link @norn/non-ifu-main
    npm link @norn/non-ifu-home
    npm link @norn/non-ifu-login
    npm link @norn/non-ifu-organization
    npm link @norn/non-theme-base
    npm link @norn/non-theme-custom
    npm start
