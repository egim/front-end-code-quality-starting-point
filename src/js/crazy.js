var a = 1;

class KnownIssue{

  constructor(issue_number, name, manifestation, workaround, version_found, target_release, fixed_in_release, author, labels = []){
    this.issue_number       = issue_number
    this.name               = name || 'Known Issue ID #' + issue_number
    this.manifestation      = manifestation
    this.workaround         = workaround || 'Investigating'
    this.version_found      = version_found || 'N/A'
    this.target_release     = target_release || 'Investigating'
    this.fixed_in_release   = fixed_in_release || ''
    this.author             = author
    this.labels             = ['KnownIssue_' + issue_number]
    this.works_as_intended  = fixed_in_release.toLowerCase() === 'works as intended'
    if(this.resolvedIssue()){
      this.labels.push('CLOSED')
    }
  }

  body_content() {
    var fixedInVersion = this.resolvedIssue() ? `
        <br>
        <h3><strong>Fixed in Firmware Version:</strong></h3>
        <p>${this.fixed_in_release}</p>
        ` : '',
      workaround = `
        <br>
        <h3><strong>Workaround:</strong></h3>
        <p>${this.workaround}</p>
        `,
      content =`
        <h1><span class="wysiwyg-color-red120">Known Issue ID: ${this.issue_number}</span></h1>
        <h3><strong>Issue Summary:</strong></h3>
        <p>${this.manifestation}</p>
        <br>
        <h3><strong>Found in Firmware Version:</strong></h3>
        <p> ${this.version_found} </p>
        `
    if (this.resolvedIssue()) {
      if(this.works_as_intended) {
        content = content + fixedInVersion + workaround
      } else {
        content = content + fixedInVersion
      }
    } else {
      content += `
        <br>
        <h3><strong>Target Fixed in Firmware Version:</strong></h3>
        <p>${this.target_release}</p>
      ` + workaround
    }

    return content
  }

  resolvedIssue() {
    switch (this.fixed_in_release.toUpperCase()) {
      case 'TBD':
      case '':
        return false
      default:
        return true
    }
  }

}

module.exports = KnownIssue
