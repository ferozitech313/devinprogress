<template>
    <nav class="navbar navbar-expand navbar-dark bg-primary my-properties-nav">
        <div class="container">
            <div class="navbar-collapse collapse">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <nuxt-link class="nav-link" to="/property-manager/my_properties">MY PROPERTIES</nuxt-link>
                    </li>
                    <li class="nav-item">
                        <nuxt-link class="nav-link" to="/all_leads">ALL LEADS</nuxt-link>
                    </li>
                    <li class="nav-item number-notification">
                        <nuxt-link class="nav-link " to="/applications">APPLICATIONS
                            <span>1</span>
                        </nuxt-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>