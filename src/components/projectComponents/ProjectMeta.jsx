function ProjectMeta({ project }) {
  return (
    <div className="grid border-t border-border md:grid-cols-3">
      <div className="border-b border-border p-6 md:border-b-0 md:border-r md:p-8">
        <p className="font-mono text-xs uppercase tracking-wider text-text-muted">
          Role
        </p>

        <p className="mt-3 text-base text-text-primary">
          {project.role}
        </p>
      </div>

      <div className="border-b border-border p-6 md:border-b-0 md:border-r md:p-8">
        <p className="font-mono text-xs uppercase tracking-wider text-text-muted">
          Type
        </p>

        <p className="mt-3 text-base text-text-primary">
          {project.type}
        </p>
      </div>

      <div className="p-6 md:p-8">
        <p className="font-mono text-xs uppercase tracking-wider text-text-muted">
          Status
        </p>

        <p className="mt-3 text-base text-text-primary">
          {project.status}
        </p>
      </div>
    </div>
  );
}

export default ProjectMeta;