module.exports = class Configuration {
    static isValid() {
        return (
            process.env.SF_USERNAME &&
            process.env.SF_PASSWORD &&
            process.env.SF_TOKEN &&
            process.env.SF_LOGIN_URL &&
            process.env.QUIZ_API_KEY
        );
    }

    static getSfLoginUrl() {
        return process.env.SF_LOGIN_URL;
    }

    static getSfUsername() {
        return process.env.SF_USERNAME;
    }

    static getSfSecuredPassword() {
        return process.env.SF_PASSWORD + process.env.SF_TOKEN;
    }

    static getSfNamespacePrefix() {
        return process.env.SF_NAMESPACE ? `${process.env.SF_NAMESPACE}__` : '';
    }

    static getSfNamespacePath() {
        return process.env.SF_NAMESPACE ? `/${process.env.SF_NAMESPACE}` : '';
    }

    static getQuizApiKey() {
        return process.env.QUIZ_API_KEY;
    }

    static shouldCollectPlayerEmails() {
        const value = process.env.COLLECT_PLAYER_EMAILS
            ? process.env.COLLECT_PLAYER_EMAILS.toUpperCase()
            : null;
        return value === 'TRUE';
    }
};
