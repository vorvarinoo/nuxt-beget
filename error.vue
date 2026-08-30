<template>
    <div class="d-flex flex-column justify-content-center align-items-center vh-100">
        <div class="mb-3">
            <i class="bi bi-exclamation-triangle display-1 text-danger"></i>
        </div>
        <h1 class="display-4 text-danger mb-3">404 - Page Not Found</h1>
        <p>
            Ooops! The page you're looking for doesn't exist or has been moved.
        </p>
        <nuxt-link to="/" class="btn btn-primary btn-lg">
            Go Back to Home
        </nuxt-link>
    </div>
</template>