export function buildOrgTree(employees, managerId = null) {
    return employees
      .filter(emp => emp.managerId === managerId)
      .map(emp => ({
        ...emp,
        reports: buildOrgTree(employees, emp.id)
      }));
  }
  