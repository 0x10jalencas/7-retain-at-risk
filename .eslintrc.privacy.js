// Privacy and FERPA compliance linting rules
module.exports = {
  rules: {
    // Custom rule to prevent PII rendering
    'no-pii-rendering': {
      create: function(context) {
        const bannedPatterns = [
          /student\.name/,
          /student\.email/,
          /student\.id(?!s)/,  // Allow 'ids' but not 'id'
          /student\.phone/,
          /student\.address/,
          /student\.ssn/,
          /student\.birthdate/,
          /individualData/,
          /personalInfo/,
          /\.map\(\s*student\s*=>/  // Mapping over individual students
        ];

        return {
          Identifier(node) {
            const source = context.getSourceCode().getText(node);
            bannedPatterns.forEach(pattern => {
              if (pattern.test(source)) {
                context.report({
                  node,
                  message: '🚨 FERPA VIOLATION: Individual student data access detected. Use aggregate data only.'
                });
              }
            });
          }
        };
      }
    }
  }
};