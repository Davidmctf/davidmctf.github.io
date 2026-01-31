# AGENTS.md

This file contains guidelines for agentic coding agents working in this repository. It standardizes build, lint, test workflows, and code‑quality expectations for Laravel projects in this repo. (BACK-END ONLY FOR NOW), HEXAGONAL ARCHITECTURE

# [after spacing required] //note: USE THIS SPACE WITH PROJECT SPECIFIC INSTRUCTIONS, THIS MARKER IS IMPORTANT FOR THE AGENT TO KNOW WHERE THE UNIVERSAL RULES END AND THE PROJECT SPECIFIC INSTRUCTIONS BEGIN, DO NOT DELETE THIS MARKER, AND COMPLETE THE INSTRUCTIONS AFTER THIS MARKER AFTER WITH the Load project configuration and detect technology stack where is necesary

## referencis files

- **AGENTS.md**: [path](./AGENTS.md) ( this file )
- **universal-rules.md**: [path](./universal-rules.md) ( universal rules for all projects )
- **.vscode**: [path](./.vscode/) ( vscode settings and agents )
- **.vscode/agents/**: [path](./.vscode/agents/) ( agents configurations )
- **context.sqlite**: [path](./.vscode/context.sqlite) ( context storage file )
- **tree-files.txt**: [path](./tree-files.txt) ( repository tree structure file )
- **\*.py**: Python source code files with context.sqlite integration

## Tree directories

- **tree file**: [path](./tree-files.txt)
- **generate tree**: Generate a tree structure of the repository files and directories and save it to tree-files.txt
- **read tree**: Read the tree structure from tree-files.txt for context on project structure
- **update tree**: Update tree-files.txt whenever files or directories are added, removed, or modified
- **tree depth**: Limit tree depth to 4 levels for readability
- **important**: Always keep tree-files.txt up to date with the current repository structure
- **exists**: If not exists file, create, else update

### Tree agents

- **Tree agents dir**: path to tree agents [path](./.vscode/agents/)
- **context file**: Route context file [path](.vscode/context.sqlite)
- **set context**: Save context info in context.sqlite with table session_context and session_notes
- **get context**: Read context info from context.sqlite with table session_context and session_notes

## Agent Mode Instructions

Use the following instructions when operating in AGENT MODE:

- Use technical-orchestrator-agent for orchestration tasks
- Use fullstack-code-analyzer for code analysis tasks
- Always refer to CLAUDE.md for specific guidelines

# Set and Get context instruction important rule

Save with conversation info required with persistent context needed in context.sqlite and use sqlite3 command in terminal allowed in background for this actions:

- **context file**: Route context file [path](.vscode/context.sqlite)
- **set context**: Save context info in context.sqlite with table session_context and session_notes
- **get context**: Read context info from context.sqlite with table session_context and session_notes

# NOTE (IMPORTANT): The content after this marker is project-specific and should be stored in the database, not in markdown format.

# BACK-END

## Workflow@ProjectSetup

### Step@1[load_environment] Load Environment → detect_stack

**desc**: Load project configuration and detect technology stack
**progress**: 10%
**action**: LOAD_ENVIRONMENT
**outputs[array]** (default empty):

### Step@2[build_commands] Define Build Commands → test_commands

**desc**: Define build, lint, and test commands for the project
**progress**: 30%
**action**: DEFINE_COMMANDS

**build_commands[0]{name,command,description}** (default empty):

### Step@3[code_style] Define Code Style Guidelines → naming_conventions

**desc**: Establish code style and naming conventions
**progress**: 60%
**action**: DEFINE_STYLE_GUIDE

**environment_config[2]{key,value}**:
1,line_length,"150 characters"

**import_rules[3]{rule,example}**:
1,absolute_imports"
2,import_groups,"standard lib → third-party → local imports"
3,blank_lines,"Separate import groups with blank lines"

**type_hints[2]{rule,example}**:
2,nullable_types,"Optional[T] for nullable return types"
3,collections,"List[T], Dict[K,V] from typing module"

### Step@4[naming_conventions] Define Naming Conventions → architecture_rules

**desc**: Define naming conventions for all project components
**progress**: 80%
**action**: DEFINE_NAMING

**naming_rules[10]{type,convention,example}**:
1,Interfaces(Ports),"Prefix I","I<Name>Repository, I<Name>Service"
2,Implementations,"No prefix","<Name>Repository, <Name>Service"
3,Use Cases,"Suffix UseCase","Get<Name>ByIdUseCase"
4,Mappers,"Suffix Mapper","<Name>Mapper, UserMapper"
5,Builders,"Suffix Builder","<Name>Builder, UserBuilder"
6,DTOs(Schemas),"Suffix Request/Response","<Name>Request, UserResponse"
7,Domain Models,"Singular nouns","<Name>, User, Profile"
8,Test Classes,"Prefix Test","TestUserMapper, Test<Name>Controller"
9,Test Functions,"Prefix test\_","test_to_dto_domain_to_response"

### Step@5[architecture_rules] Define Architecture Rules → domain_layer

**desc**: Define hexagonal architecture rules and layer responsibilities
**progress**: 100%
**action**: DEFINE_ARCHITECTURE

**domain_layer[5]{rule,description}**:
2,no_external_deps,"NO external dependencies"
3,business_logic,"Business logic in model methods"
4,post_init,"Use **post_init** for validations"

**application_layer[5]{rule,description}**:
1,interface_deps,"Services depend on interfaces, not implementations"
2,mapper_base,"Mappers extend AbstractMapper[Domain, RequestDTO, ResponseDTO]"
3,builder_base,"Builders extend AbstractBuilder[Domain]"
4,usecase_base,"Use cases extend AbstractUseCase[Command, Result]"

**infrastructure_layer[1]{rule,description}**:
4,async_io,"Use async/await for I/O operations"

**testing_rules[1]{rule,description}**:
2,naming_pattern,"test\*<scenario>\_<expected> pattern"

**error_handling[4]{rule,description}**:
1,http_errors,"Raise HTTPException in controllers for HTTP errors"
2,domain_errors,"Use ValueError for domain-level validation errors"
3,nullable_returns,"Return Optional[T] for nullable return types"

**docstring_rules[4]{rule,description}**:
1,format,"Triple-quoted docstrings for modules, classes, methods"
2,language,"Spanish or English accepted"
3,documentation,"Document parameters and return values for complex functions"

**pre_commit_hooks[0]{rule,command}** (default empty):

**architecture_flow[7]{layer,depends_on}**:
1,Domain,"NONE - pure business logic"
2,Application,"Domain only - NO Infrastructure"
3,Infrastructure,"Application and Domain"
4,DTOs,"infrastructure/api/schemas/ only"
5,Interfaces,"domain/interfaces/ (ports)"
6,Implementations,"infrastructure/repositories/ (adapters)"
