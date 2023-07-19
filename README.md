# angular-estructura

Este proyecto contiene la estructura adecuada para crear un proyecto en angular de
manera escalable.

Este proyecto se ha realizado siguiendo los consejos del video de Antonio Perez en Youtube:

Angular en profundidad (II): Organizar y estructurar un proyecto angular
https://www.youtube.com/watch?v=2f6DPwDYlnM&ab_channel=AntonioP%C3%A9rez


- **Core**
    
    Contiene los componentes, servicios y módulos esenciales que son compartidos y utilizados en todo el proyecto. Es decir, elementos globales para toda la app.
    
    - **Models**
        
        La carpeta "models" es donde se colocan las definiciones de clases o interfaces que representan objetos de datos utilizados en la aplicación. Estos modelos pueden ser objetos que representen datos obtenidos de la API, datos que se muestran en las vistas, o cualquier otra entidad que necesite ser estructurada para su manipulación
        
    - **Shared**
        
        La carpeta "shared" contiene elementos compartidos entre diferentes partes del proyecto. Estos elementos pueden incluir componentes ( ej: un popup), servicios, directivas, clases de utilidad, tuberías (pipes) y cualquier otra funcionalidad que sea reutilizable en varias partes de la aplicación. Al colocar estos elementos en una carpeta compartida, se evita la duplicación de código y se fomenta la reutilización. Además, la carpeta "shared" puede contener módulos que exportan y encapsulan funcionalidades comunes para ser utilizadas en otros módulos del proyecto.
        
- **Public**
    
    Zona a la que puede acceder todo el mundo
    
    - **Home**
        - **Components**
        - **Containers**
            
            [Anotación](https://www.notion.so/Anotaci-n-e9508afa5188464fb2db6a671be15e3c?pvs=21)
            
    - **Login**
- **Admin**
    
    Contiene la funcionalidad específica de la administración o el panel de control de la aplicación. Aquí se encuentran los componentes, módulos y servicios relacionados con la gestión del sistema, configuraciones, estadísticas, y cualquier otra acción reservada para usuarios administrativos o con privilegios especiales. El contenido de esta sección generalmente requiere autenticación y autorización para acceder.
    
- **Intranet**
    
    Zona a la que accedemos tras hacer login en la web. Aquí se encuentran los componentes, módulos y servicios relacionados con áreas o secciones reservadas para un grupo específico de usuarios o empleados.