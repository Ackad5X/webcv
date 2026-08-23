import dataSecurity from "@/assets/zscaler-data-security-z-badge.png.asset.json";
import zpaSupport from "@/assets/zscaler-zpa-support-specialist-badge.png.asset.json";
import ziaSupport from "@/assets/zscaler-zia-support-specialist-badge.png.asset.json";
import dtEngineer from "@/assets/zscaler-digital-transformation-engineer.png.asset.json";
import dtAdministrator from "@/assets/zscaler-digital-transformation-administrator.png.asset.json";
import ddConsultant from "@/assets/zscaler-digital-delivery-consultant.png.asset.json";
import nsSpecialist from "@/assets/Netskope_Cloud_Security_Specialist.png.asset.json";
import nsAdministrator from "@/assets/Netskope_Certified_Cloud_Security_Administrator.png.asset.json";
import nsIntegrator from "@/assets/Netskope_Certified_Cloud_Security_Integrator.png.asset.json";

export const certBadges: Record<string, string> = {
  "Data Security Delivery Specialist Certification": dataSecurity.url,
  "Zscaler Private Access (ZPA) Support Specialist Certification": zpaSupport.url,
  "Zscaler Internet Access (ZIA) Support Specialist Certification": ziaSupport.url,
  "Zscaler Digital Transformation Engineer": dtEngineer.url,
  "Zscaler Digital Transformation Administrator": dtAdministrator.url,
  "Zscaler Digital Delivery Consultant": ddConsultant.url,
  "Netskope Cloud Security Specialist": nsSpecialist.url,
  "Netskope Certified Cloud Security Administrator": nsAdministrator.url,
  "Netskope Certified Cloud Security Integrator": nsIntegrator.url,
};
