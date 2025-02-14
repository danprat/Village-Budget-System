This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

# CHANGELOG Guidelines and Template

## File Location
`/docs/CHANGELOG.md`

## Change Entry Format
Each change must include:
- Type of change (Added/Changed/Fixed/Removed/Security)
- Description of the change
- Files modified or added
- Code changes details
- Related issue/ticket numbers
- Date of change
- Developer name

## CHANGELOG.md Template

```markdown
# Changelog
All notable changes to the Village Budget System will be documented in this file.

## Format Guidelines
Each entry should follow this format:

### [Version] - YYYY-MM-DD
#### [Type of Change]
- Description of change
  - Files Modified:
    - `path/to/file1.tsx`: [specific changes]
    - `path/to/file2.ts`: [specific changes]
  - New Files:
    - `path/to/newfile.tsx`: [purpose of file]
  - Database Changes:
    - Table modifications
    - New tables added
  - Developer: [Name]
  - Issue/Ticket: #[number]

## [Unreleased]

### Added
- New feature implementation
  - Files Modified:
    - `src/app/features/budget/page.tsx`: Added budget form component
    - `src/components/forms/BudgetForm.tsx`: Created new form component
  - New Files:
    - `src/lib/validators/budget.ts`: Added form validation
  - Database Changes:
    - Added 'budget_proposals' table
  - Developer: John Doe
  - Issue: #123

### Changed
- Updated user authentication flow
  - Files Modified:
    - `src/app/api/auth/[...nextauth]/route.ts`: Modified authentication logic
    - `src/lib/auth.ts`: Updated session handling
  - Developer: Jane Smith
  - Issue: #124

### Fixed
- Budget calculation bug
  - Files Modified:
    - `src/lib/utils/calculations.ts`: Fixed rounding error
  - Developer: John Doe
  - Issue: #125

## [0.1.0] - 2024-02-14

### Added
- Initial project setup
  - Files Created:
    - `src/app/layout.tsx`: Base layout
    - `src/app/page.tsx`: Home page
    - `prisma/schema.prisma`: Database schema
  - Database Changes:
    - Initial schema creation
    - Basic tables setup
  - Developer: John Doe
```

## Guidelines for Updating CHANGELOG

### 1. When to Update
- After implementing new features
- After modifying existing features
- After fixing bugs
- After database changes
- After security updates
- After dependency updates

### 2. Change Categories
- `Added`: New features
- `Changed`: Changes to existing functionality
- `Deprecated`: Features to be removed
- `Removed`: Removed features
- `Fixed`: Bug fixes
- `Security`: Security updates

### 3. Required Information
For each change, document:
1. **Files Modified**
   - Full path to file
   - Specific changes made
   - Reason for changes

2. **New Files**
   - Full path to file
   - Purpose of file
   - Key functionality

3. **Database Changes**
   - Schema modifications
   - New tables/columns
   - Migration files

4. **Dependencies**
   - Added/removed packages
   - Version changes
   - Reason for changes

### 4. Best Practices
1. Update CHANGELOG before creating pull request
2. Keep entries clear and concise
3. Include all relevant file paths
4. Link to issue numbers
5. Add migration information
6. Include developer name
7. Date each entry

### 5. Example Entries

#### Feature Addition
```markdown
### Added
- User registration system
  - Files Modified:
    - `src/app/(auth)/register/page.tsx`: Created registration page
    - `src/components/forms/RegisterForm.tsx`: Added form component
    - `src/lib/validators/auth.ts`: Added validation rules
  - New Files:
    - `src/app/api/auth/register/route.ts`: API endpoint
  - Database Changes:
    - Added email verification field to users table
  - Developer: John Doe
  - Issue: #127
```

#### Bug Fix
```markdown
### Fixed
- Incorrect budget calculation
  - Files Modified:
    - `src/lib/utils/calculations.ts`: Fixed rounding error in total calculation
    - `src/components/BudgetDisplay.tsx`: Updated display format
  - Tests Added:
    - `__tests__/utils/calculations.test.ts`: Added test cases
  - Developer: Jane Smith
  - Issue: #128
```


src/
├── app/
│   ├── api/
│   │   ├── auth/
│   │   ├── projects/
│   │   └── budget/
│   ├── dashboard/
│   ├── projects/
│   └── layout.tsx
├── components/
│   ├── ui/
│   ├── forms/
│   └── shared/
├── lib/
│   ├── prisma.ts
│   ├── auth.ts
│   └── utils.ts
├── types/
└── middleware.ts# Village-Budget-System
